import AllProductsClient from "./AllProductsClient";
import {
  generateCollectionPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import { Suspense } from "react";
import { fetchAllProductsServer } from "@/lib/api/fetchProductsServer";

// SEO: Dynamic metadata to handle filtered/faceted URLs
// Filtered URLs should be noindex to prevent crawl budget waste
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const params = await searchParams;

  // Check if any filter parameters are present
  const hasFilters = !!(
    params.category ||
    params.brand ||
    params.sort ||
    params.fitment_pairs ||
    params.q ||
    (params.page && params.page !== "1")
  );

  return {
    title: "All Products | Shop",
    description:
      "Browse our complete collection of products. Find the best products across all categories.",
    keywords: "products, shop, buy online, all products",
    alternates: {
      canonical: "/products/all",
    },
    // noindex filtered URLs to prevent crawl budget waste on faceted navigation
    robots: hasFilters
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: "All Products | Shop",
      description: "Browse our complete collection of products",
      type: "website",
    },
  };
}

export default async function ProductsPage() {
  // Fetch initial products server-side for SEO
  const initialData = await fetchAllProductsServer({ per_page: 20 });

  // Generate schema.org structured data
  const collectionSchema = generateCollectionPageSchema(
    "All Products",
    "Browse our complete collection of products. Find the best products across all categories.",
    "/products/all"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products/all" },
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
        <AllProductsClient initialData={initialData} />
      </Suspense>
    </>
  );
}
