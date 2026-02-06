import BrandPageClient from "./BrandPageClient";
import {
  generateCollectionPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getStoreName } from "@/app/utils/branding";
import { fetchBrandProductsServer } from "@/lib/api/fetchProductsServer";

// Use ISR with 10-minute revalidation for better performance
// Brand data changes less frequently than products/categories
export const revalidate = 600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const brandName = decodedSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const storeName = getStoreName();

  return {
    title: `${brandName} Products`,
    description: `Shop authentic ${brandName} products at ${storeName}. Genuine parts, competitive prices, and expert support. Order now.`,
    keywords: `${brandName}, ${brandName} products, buy ${brandName}`,
    alternates: {
      canonical: `/brand/${slug}`,
    },
    openGraph: {
      title: `${brandName} Products`,
      description: `Shop genuine ${brandName} products with expert support.`,
      type: "website",
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const brandName = decodedSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  // Fetch initial products server-side for SEO
  const initialData = await fetchBrandProductsServer(slug, { per_page: 18 });

  // Return 404 if brand has no products (likely doesn't exist)
  if (initialData.pagination.total === 0) {
    notFound();
  }

  const storeName = getStoreName();

  // Generate schema.org structured data
  const collectionSchema = generateCollectionPageSchema(
    brandName,
    `Shop genuine ${brandName} products at ${storeName}.`,
    `/brand/${slug}`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Brands", url: "/brands" },
    { name: brandName, url: `/brand/${slug}` },
  ]);

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense>
        <BrandPageClient slug={slug} initialData={initialData} />
      </Suspense>
    </>
  );
}
