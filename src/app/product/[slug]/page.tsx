import type { Metadata } from "next";
import { Suspense } from "react";
import createApolloServerClient from "@/graphql/server-client";
import {
  PRODUCT_DETAILS_BY_ID,
  type ProductDetailsByIdData,
  type ProductDetailsByIdVars,
} from "@/graphql/queries/productDetailsById";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { getStoreName } from "@/app/utils/branding";
import ProductDetailClient from "./ProductDetailClient";

// Force dynamic rendering since product data changes frequently
export const dynamic = "force-dynamic";

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
      title: `Product Not Found | ${storeName}`,
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
    title: `${product.name} | ${storeName}`,
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
  const storeName = getStoreName();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "";

  // Generate structured data for SSR (search engines will see this)
  let productSchema = null;
  let breadcrumbSchema = null;

  if (product) {
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

    productSchema = generateProductSchema({
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

    breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Products", url: "/products/all" },
      { name: product.name, url: `/product/${slug}` },
    ]);
  }

  return (
    <>
      {/* Server-side rendered structured data for SEO */}
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* Client component handles all interactivity */}
      <Suspense
        fallback={
          <div className="lg:container lg:mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-4 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse w-3/4 h-3/4 bg-gray-200" />
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div className="h-8 bg-gray-200 rounded w-2/3 animate-pulse" />
                  <div className="h-5 bg-gray-200 rounded w-1/3 animate-pulse" />
                  <div className="h-24 bg-gray-100 rounded animate-pulse" />
                  <div className="h-10 bg-gray-200 rounded w-1/2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        }
      >
        <ProductDetailClient />
      </Suspense>
    </>
  );
}
