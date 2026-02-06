/**
 * Server-side product fetching utilities for SEO
 * These functions fetch products on the server to ensure initial HTML contains product data
 */

const PARTSLOGIC_URL = process.env.NEXT_PUBLIC_PARTSLOGIC_URL || "";

export interface ServerProduct {
  id: string;
  name: string;
  slug: string;
  description?: string;
  primary_image?: string;
  category_id?: string;
  category_name?: string;
  category_slug?: string;
  brand_id?: string;
  brand_name?: string;
  brand_slug?: string;
  category: {
    id: string;
    name: string;
  } | null;
  productType?: {
    id: string;
    name: string;
    slug: string;
  } | null;
  thumbnail?: {
    url: string;
    alt: string;
  } | null;
  price_min?: number;
  price_max?: number;
  currency?: string;
  media?: Array<{
    id: number;
    url: string;
    alt: string;
  }>;
  collection_ids?: number[];
  collection_names?: string[];
  skus?: string[];
  in_stock?: boolean;
  total_quantity?: number;
}

export interface ServerCategory {
  id: string;
  value: string;
  slug: string;
  count: number;
  media?: string;
  level?: number;
  parent_id?: string;
  children?: ServerCategory[];
}

export interface ServerBrand {
  id: string;
  value: string;
  count: number;
  slug?: string;
  media?: string;
}

export interface ServerProductsResponse {
  products: ServerProduct[];
  facets: {
    brands: ServerBrand[];
    categories: ServerCategory[];
    price_ranges: Array<{ min: number; max: number; count: number }> | null;
    years: Array<{ value: string; count: number }>;
    makes: Array<{ value: string; count: number }>;
    models: Array<{ value: string; count: number }>;
  };
  pagination: {
    total: number;
    page: number;
    per_page: number;
    total_pages: number;
  };
}

interface FetchProductsParams {
  page?: number;
  per_page?: number;
  q?: string;
  fitment_pairs?: string;
  category_slug?: string | string[];
  brand_slug?: string | string[];
  sort_by?: string;
}

/**
 * Fetches products from the PartsLogic API server-side
 * This enables SSR for product listing pages, improving SEO
 */
export async function fetchProductsServer(
  params: FetchProductsParams = {}
): Promise<ServerProductsResponse> {
  if (!PARTSLOGIC_URL) {
    console.warn("PARTSLOGIC_URL not configured, returning empty products");
    return {
      products: [],
      facets: {
        brands: [],
        categories: [],
        price_ranges: null,
        years: [],
        makes: [],
        models: [],
      },
      pagination: {
        total: 0,
        page: 1,
        per_page: 20,
        total_pages: 0,
      },
    };
  }

  try {
    const searchParams = new URLSearchParams();

    searchParams.set("page", String(params.page || 1));
    searchParams.set("per_page", String(params.per_page || 20));

    if (params.q) {
      searchParams.set("q", params.q);
    }

    if (params.fitment_pairs) {
      searchParams.set("fitment_pairs", params.fitment_pairs);
    }

    if (params.category_slug) {
      const slugs = Array.isArray(params.category_slug)
        ? params.category_slug
        : [params.category_slug];
      slugs.forEach((slug) => searchParams.append("category_slug", slug));
    }

    if (params.brand_slug) {
      const slugs = Array.isArray(params.brand_slug)
        ? params.brand_slug
        : [params.brand_slug];
      slugs.forEach((slug) => searchParams.append("brand_slug", slug));
    }

    if (params.sort_by) {
      searchParams.set("sort_by", params.sort_by);
    }

    const response = await fetch(
      `${PARTSLOGIC_URL}/api/search/products?${searchParams.toString()}`,
      {
        headers: {
          accept: "application/json",
        },
        // Use cache with revalidation for better performance
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch products: ${response.status} ${response.statusText}`
      );
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const data: ServerProductsResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products server-side:", error);
    return {
      products: [],
      facets: {
        brands: [],
        categories: [],
        price_ranges: null,
        years: [],
        makes: [],
        models: [],
      },
      pagination: {
        total: 0,
        page: 1,
        per_page: 20,
        total_pages: 0,
      },
    };
  }
}

/**
 * Fetches products by category slug server-side
 */
export async function fetchCategoryProductsServer(
  slug: string,
  options: { page?: number; per_page?: number; search?: string } = {}
): Promise<ServerProductsResponse> {
  return fetchProductsServer({
    page: options.page || 1,
    per_page: options.per_page || 20,
    q: options.search,
    category_slug: slug,
  });
}

/**
 * Fetches all products server-side (for /products/all page)
 */
export async function fetchAllProductsServer(
  options: {
    page?: number;
    per_page?: number;
    q?: string;
    fitment_pairs?: string;
    category_slug?: string[];
    brand_slug?: string[];
    sort_by?: string;
  } = {}
): Promise<ServerProductsResponse> {
  return fetchProductsServer({
    page: options.page || 1,
    per_page: options.per_page || 20,
    q: options.q,
    fitment_pairs: options.fitment_pairs,
    category_slug: options.category_slug,
    brand_slug: options.brand_slug,
    sort_by: options.sort_by,
  });
}

/**
 * Fetches products by brand slug server-side
 */
export async function fetchBrandProductsServer(
  slug: string,
  options: { page?: number; per_page?: number; search?: string } = {}
): Promise<ServerProductsResponse> {
  return fetchProductsServer({
    page: options.page || 1,
    per_page: options.per_page || 20,
    q: options.search,
    brand_slug: slug,
  });
}
