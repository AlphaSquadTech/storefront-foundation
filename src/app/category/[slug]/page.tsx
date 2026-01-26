import CategoryPageClient from "./CategoryPageClient";
import {
  generateProductCategoryPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import { Suspense } from "react";

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

  return {
    title: `${categoryName} | Shop`,
    description: `Browse our ${categoryName} collection. Find the best products in ${categoryName} category.`,
    keywords: `${categoryName}, shop, products, buy online`,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: `${categoryName} | Shop`,
      description: `Browse our ${categoryName} collection`,
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

  // Generate schema.org structured data
  const categoryPageSchema = generateProductCategoryPageSchema(
    categoryName,
    `Browse our ${categoryName} collection. Find the best products in ${categoryName} category.`,
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
        <CategoryPageClient slug={slug} />
      </Suspense>
    </>
  );
}
