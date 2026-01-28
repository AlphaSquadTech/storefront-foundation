import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import createApolloServerClient from "@/graphql/server-client";
import {
  PRODUCT_DETAILS_BY_ID,
  type ProductDetailsByIdData,
  type ProductDetailsByIdVars,
} from "@/graphql/queries/productDetailsById";
import {
  SEARCH_PRODUCTS_BY_NAME,
  type SearchProductsByNameData,
  type SearchProductsByNameVars,
} from "@/graphql/queries/searchProductsByName";
import {
  PRODUCT_BY_ID,
  type ProductByIdData,
  type ProductByIdVars,
} from "@/graphql/queries/productById";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { getStoreName, truncateTitle } from "@/app/utils/branding";
import { extractPlainTextFromEditorJs } from "@/app/utils/editorJsUtils";
import ProductDetailClient from "./ProductDetailClient";

// Use ISR with 5-minute revalidation for better performance
// Product data will be cached and refreshed every 5 minutes
export const revalidate = 300;

// Lookup product slug by ID (for when PartsLogic ID is passed)
async function getSlugById(id: string): Promise<string | null> {
  try {
    const client = createApolloServerClient();
    const channel = process.env.NEXT_PUBLIC_SALEOR_CHANNEL || "default-channel";

    const { data } = await client.query<ProductByIdData, ProductByIdVars>({
      query: PRODUCT_BY_ID,
      variables: { id, channel },
    });

    return data?.product?.slug || null;
  } catch (error) {
    console.error("[ProductPage] Error fetching product by ID:", error);
    return null;
  }
}

// Convert a human-readable slug to a search term
// e.g., "access-original-93-98-ford-ranger" → "access original ford ranger"
// Only use the first few significant words to avoid overly specific searches
function slugToSearchTerm(slug: string): string {
  const words = slug
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    // Filter out numbers (like year ranges) and very short words
    .filter(w => w.length > 2 && !/^\d+$/.test(w))
    // Take first 4 significant words for the search
    .slice(0, 4);
  
  return words.join(" ");
}

// Try to find a product by searching with the slug converted to a name
async function findProductByNameSearch(slug: string): Promise<string | null> {
  try {
    const client = createApolloServerClient();
    const channel = process.env.NEXT_PUBLIC_SALEOR_CHANNEL || "default-channel";
    const searchTerm = slugToSearchTerm(slug);

    const { data } = await client.query<
      SearchProductsByNameData,
      SearchProductsByNameVars
    >({
      query: SEARCH_PRODUCTS_BY_NAME,
      variables: { query: searchTerm, channel },
    });

    if (data?.products?.edges?.length) {
      // Find the best match by comparing normalized names
      const normalizedSearch = searchTerm.toLowerCase();
      for (const edge of data.products.edges) {
        const normalizedName = edge.node.name.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ");
        // Check if the search term contains most of the product name words
        const searchWords = normalizedSearch.split(" ").filter(w => w.length > 2);
        const nameWords = normalizedName.split(" ").filter(w => w.length > 2);
        const matchCount = searchWords.filter(w => nameWords.some(nw => nw.includes(w) || w.includes(nw))).length;
        
        if (matchCount >= Math.min(3, nameWords.length * 0.5)) {
          return edge.node.slug;
        }
      }
      // If no good match, return null to properly 404 rather than redirect to wrong product
      return null;
    }

    return null;
  } catch (error) {
    console.error("[ProductPage] Error searching for product by name:", error);
    return null;
  }
}

async function getProduct(slug: string) {
  try {
    const client = createApolloServerClient();
    const channel = process.env.NEXT_PUBLIC_SALEOR_CHANNEL || "default-channel";

    const { data } = await client.query<
      ProductDetailsByIdData,
      ProductDetailsByIdVars
    >({
      query: PRODUCT_DETAILS_BY_ID,
      variables: { slug, channel },
    });

    return data?.product || null;
  } catch (error) {
    console.error("[ProductPage] Error fetching product:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  let product = await getProduct(slug);
  let canonicalSlug = slug; // Track the correct slug for canonical URL
  const storeName = getStoreName();

  // If product not found, try fallback search (for metadata generation)
  if (!product) {
    const correctSlug = await findProductByNameSearch(slug);
    if (correctSlug && correctSlug !== slug) {
      product = await getProduct(correctSlug);
      canonicalSlug = correctSlug; // Use the correct slug for canonical URL
    }
  }

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const price = product.pricing?.priceRange?.start?.gross?.amount || 0;
  const currency = product.pricing?.priceRange?.start?.gross?.currency || "USD";
  const imageUrl = product.media?.[0]?.url || "/no-image-avail-large.png";
  
  // Extract plain text from Editor.js JSON for meta description
  const description =
    extractPlainTextFromEditorJs(product.description, 160) ||
    `Shop ${product.name} at ${storeName}. Quality products with fast shipping.`;

  return {
    title: truncateTitle(product.name, 45),
    description,
    alternates: {
      canonical: `/product/${canonicalSlug}`, // Use resolved slug for SEO
    },
    openGraph: {
      title: product.name,
      description,
      type: "website",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    other: {
      "product:price:amount": price.toString(),
      "product:price:currency": currency,
    },
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ pid?: string }>;
}) {
  const { slug: rawSlug } = await params;
  const { pid } = await searchParams;
  const slug = decodeURIComponent(rawSlug);
  
  // If product ID is provided (from PartsLogic search), use it for reliable lookup
  if (pid) {
    const correctSlug = await getSlugById(pid);
    if (correctSlug && correctSlug !== slug) {
      // Redirect to the canonical URL with the correct Saleor slug
      redirect(`/product/${correctSlug}`);
    }
  }
  
  const product = await getProduct(slug);

  // If product not found by slug, try searching by name (fallback for PartsLogic slug mismatch)
  if (!product) {
    const correctSlug = await findProductByNameSearch(slug);
    if (correctSlug && correctSlug !== slug) {
      // Redirect to the correct product URL (permanent redirect for SEO)
      redirect(`/product/${correctSlug}`);
    }
    // Still not found, return 404
    notFound();
  }

  // Generate structured data for SSR (search engines will see this)
  const price = product.pricing?.priceRange?.start?.gross?.amount || 0;
  const currency =
    product.pricing?.priceRange?.start?.gross?.currency || "USD";
  const firstVariant = product.variants?.[0];
  const availability =
    firstVariant?.quantityAvailable && firstVariant.quantityAvailable > 0
      ? "InStock"
      : "OutOfStock";

  // Extract rating/review data from metadata if available
  // Common metadata keys: "rating", "average_rating", "review_count", "reviews_count"
  const ratingMeta = product.metadata?.find(
    (m) => m.key === "rating" || m.key === "average_rating"
  );
  const reviewCountMeta = product.metadata?.find(
    (m) => m.key === "review_count" || m.key === "reviews_count"
  );
  const rating = ratingMeta ? parseFloat(ratingMeta.value) : undefined;
  const reviewCount = reviewCountMeta
    ? parseInt(reviewCountMeta.value, 10)
    : undefined;

  const productSchema = generateProductSchema({
    id: product.id,
    name: product.name,
    description: product.description || "",
    image: product.media?.map((m) => m.url) || [],
    price,
    currency,
    availability,
    sku: firstVariant?.sku || product.id,
    brand: product.category?.name,
    // Include rating data if both values are valid numbers
    rating: rating && !isNaN(rating) ? rating : undefined,
    reviewCount:
      reviewCount && !isNaN(reviewCount) && reviewCount > 0
        ? reviewCount
        : undefined,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products/all" },
    { name: product.name, url: `/product/${slug}` },
  ]);

  return (
    <>
      {/* Server-side rendered structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Client component handles all interactivity */}
      {/* Loading state handled by loading.tsx at route level */}
      <ProductDetailClient />
    </>
  );
}
