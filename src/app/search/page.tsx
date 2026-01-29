import type { Metadata } from "next";
import { Suspense } from "react";
import { getStoreName } from "@/app/utils/branding";
import SearchPage from "./SearchPageClient";
import { fetchProductsServer, ServerProductsResponse } from "@/lib/api/fetchProductsServer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Search Results",
  description: `Search for products at ${getStoreName()}. Find the best parts and accessories with our advanced search and vehicle fitment filters.`,
  robots: {
    index: false,
    follow: true,
  },
};

interface SearchPageWrapperProps {
  searchParams: Promise<{
    fitment_pairs?: string;
    q?: string;
    category?: string | string[];
    brand?: string | string[];
    sort?: string;
    page?: string;
  }>;
}

async function getInitialSearchData(
  searchParams: SearchPageWrapperProps["searchParams"]
): Promise<ServerProductsResponse | null> {
  const params = await searchParams;

  // Only fetch server-side data if there are search parameters
  if (!params.fitment_pairs && !params.q && !params.category && !params.brand) {
    // Fetch default products for empty search page
    return fetchProductsServer({ page: 1, per_page: 18 });
  }

  return fetchProductsServer({
    page: params.page ? parseInt(params.page, 10) : 1,
    per_page: 18,
    q: params.q,
    fitment_pairs: params.fitment_pairs,
    category_slug: params.category ? (Array.isArray(params.category) ? params.category : [params.category]) : undefined,
    brand_slug: params.brand ? (Array.isArray(params.brand) ? params.brand : [params.brand]) : undefined,
    sort_by: params.sort,
  });
}

export default async function SearchPageWrapper({ searchParams }: SearchPageWrapperProps) {
  const initialData = await getInitialSearchData(searchParams);

  return (
    <Suspense fallback={
      <div className="container mx-auto min-h-[60vh] py-12 px-4 flex items-center justify-center">
        <div className="size-14 block border-t-2 border-black rounded-full animate-spin" />
      </div>
    }>
      <SearchPage initialData={initialData} />
    </Suspense>
  );
}
