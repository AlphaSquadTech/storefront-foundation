import CategoryPageClient from "./CategoryPageClient";
import {
  generateProductCategoryPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import { Suspense } from "react";
import { fetchCategoryProductsServer } from "@/lib/api/fetchProductsServer";
import { getStoreName } from "@/app/utils/branding";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const categoryName = decodedSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const storeName = getStoreName();

  return {
    title: categoryName,
    description: `Shop ${categoryName} at ${storeName}. Browse our curated selection of quality products with fast shipping and great prices. Find what you need today.`,
    keywords: `${categoryName}, shop, products, buy online, ${storeName}`,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: `Shop ${categoryName}`,
      description: `Discover our ${categoryName} collection with competitive prices and fast shipping.`,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const categoryName = decodedSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  // Fetch initial products server-side for SEO
  const initialData = await fetchCategoryProductsServer(slug, { per_page: 20 });
  const storeName = getStoreName();

  // Generate schema.org structured data
  const categoryPageSchema = generateProductCategoryPageSchema(
    categoryName,
    `Shop ${categoryName} at ${storeName}. Quality products with fast shipping.`,
    `/category/${slug}`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Categories", url: "/category" },
    { name: categoryName, url: `/category/${slug}` },
  ]);

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense>
        <CategoryPageClient slug={slug} initialData={initialData} />
      </Suspense>
    </>
  );
}
