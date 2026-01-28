import type { Metadata } from "next";
import { notFound } from "next/navigation";
import createApolloServerClient from "@/graphql/server-client";
import {
  PRODUCT_DETAILS_BY_ID,
  type ProductDetailsByIdData,
  type ProductDetailsByIdVars,
} from "@/graphql/queries/productDetailsById";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { getStoreName, truncateTitle } from "@/app/utils/branding";
import ProductDetailClient from "./ProductDetailClient";

// Use ISR with 5-minute revalidation for better performance
// Product data will be cached and refreshed every 5 minutes
export const revalidate = 300;

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
  const product = await getProduct(slug);
  const storeName = getStoreName();

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
  const description =
    product.description?.substring(0, 160).replace(/<[^>]*>/g, "") ||
    `Shop ${product.name} at ${storeName}. Quality products with fast shipping.`;

  return {
    title: truncateTitle(product.name, 45),
    description,
    alternates: {
      canonical: `/product/${slug}`,
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
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const product = await getProduct(slug);

  // Return proper 404 status when product not found (not just noindex metadata)
  if (!product) {
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
