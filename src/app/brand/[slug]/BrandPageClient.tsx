"use client";

import Breadcrumb from "@/app/components/reuseableUI/breadcrumb";
import EmptyState from "@/app/components/reuseableUI/emptyState";
import { ProductCard } from "@/app/components/reuseableUI/productCard";
import ItemsPerPageSelectClient from "@/app/components/shop/ItemsPerPageSelectClient";
import { PLSearchProduct, shopApi } from "@/lib/api/shop";
import { ServerProductsResponse } from "@/lib/api/fetchProductsServer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type ItemsPerPage = 10 | 20 | 50 | 100;

interface BrandPageClientProps {
  slug: string;
  initialData?: ServerProductsResponse;
}

export default function BrandPageClient({ slug, initialData }: BrandPageClientProps) {
  const pathName = usePathname();
  const route = slug || pathName.split("/").slice(2).join("/");
  const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPage>(
    (initialData?.pagination.per_page as ItemsPerPage) || 20
  );
  const [searchQuery] = useState("");
  const [products, setProducts] = useState<PLSearchProduct[]>(
    initialData?.products?.map((p) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      description: p.description,
      primary_image: p.primary_image,
      category_id: p.category_id,
      category_name: p.category_name,
      category_slug: p.category_slug,
      brand_id: p.brand_id,
      brand_name: p.brand_name,
      brand_slug: p.brand_slug,
      category: p.category,
      price_min: p.price_min,
      price_max: p.price_max,
      currency: p.currency,
      collection_ids: p.collection_ids,
      collection_names: p.collection_names,
      skus: p.skus,
      in_stock: p.in_stock,
      total_quantity: p.total_quantity,
    })) || []
  );
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [categoryName, setCategoryName] = useState<string>(
    initialData?.products?.[0]?.category_name || route
  );
  const [pagination, setPagination] = useState(
    initialData?.pagination || {
      total: 0,
      page: 1,
      per_page: 20,
      total_pages: 0,
    }
  );
  const [isInitialLoad, setIsInitialLoad] = useState(!!initialData);

  useEffect(() => {
    // Skip initial fetch if we have server-side data
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await shopApi.getProductsBySlug({
          slug: route,
          page: 1,
          per_page: itemsPerPage,
          search: searchQuery || undefined,
          filterType: "brand_slug",
        });
        setProducts(response.products || []);
        setPagination(response.pagination);
        if (response.products && response.products.length > 0) {
          setCategoryName(response.products[0].category_name || route);
        } else {
          setCategoryName(route);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [itemsPerPage, searchQuery, route, isInitialLoad]);

  const loadMore = async () => {
    if (loadingMore || pagination.page >= pagination.total_pages) return;

    setLoadingMore(true);
    const nextPage = pagination.page + 1;

    try {
      const response = await shopApi.getProductsBySlug({
        slug: route,
        page: nextPage,
        per_page: itemsPerPage,
        search: searchQuery || undefined,
        filterType: "brand_slug",
      });

      const newProducts = response.products || [];
      setProducts((prev) => [...prev, ...newProducts]);
      setPagination(response.pagination);
    } catch (error) {
      console.error("Error loading more products:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  const Title = route.replace(/-/g, " ").toUpperCase();

  const breadcrumbItems = [
    { text: "HOME", link: "/" },
    { text: "SHOP", link: "/products/all" },
    { text: Title },
  ];

  return (
    <div className="container mx-auto min-h-[100dvh] py-12 px-4 md:px-6 md:py-16 lg:py-24 lg:px-0 relative">
      <div className="space-y-5">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-4">
          <div className="space-y-2">
            <h1 className="font-normal uppercase text-[var(--color-secondary-800)] text-xl md:text-3xl lg:text-5xl font-primary">
              {Title}
            </h1>
            {searchQuery && (
              <div className="flex items-center gap-2 text-sm text-[var(--color-secondary-600)]">
                <div className="flex items-center gap-2">
                  {pagination.total > 0
                    ? `Found ${pagination.total} result${
                        pagination.total === 1 ? "" : "s"
                      } for "${searchQuery}" in ${categoryName || Title}`
                    : `No results found for "${searchQuery}" in ${
                        categoryName || Title
                      }`}
                </div>
              </div>
            )}
            {!searchQuery && (
              <div className="flex items-center gap-2 text-sm text-[var(--color-secondary-600)]">
                <div className="flex items-center gap-2">
                  {pagination.total} product{pagination.total === 1 ? "" : "s"}{" "}
                  in { Title}
                </div>
              </div>
            )}
          </div>
          <div className="ml-auto">
            <ItemsPerPageSelectClient
              value={itemsPerPage}
              onChange={setItemsPerPage}
            />
          </div>
        </div>
      </div>
      <section className="mt-10 relative min-h-[400px]">
        {loading && (
          <div className="h-[60vh] z-10 flex items-center justify-center">
            <div className="size-14 block border-t-2 border-black rounded-full animate-spin" />
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? null : products.length > 0
            ? products.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.primary_image || "/no-image-avail-large.png"}
                  href={`/product/${item.slug}`}
                  minPrice={item.price_min || 0}
                  maxPrice={item.price_max || 0}
                  category_id={item.category_id || ""}
                  category={item.category_name || ""}
                  discount={
                    item.price_max &&
                    item.price_min &&
                    item.price_max > item.price_min
                      ? item.price_max - item.price_min
                      : null
                  }
                  isFeatured={
                    item.collection_names?.includes("Best Sellers") || false
                  }
                  onSale={(item.price_max || 0) > (item.price_min || 0)}
                />
              ))
            : !loading && (
                <EmptyState
                  text="No products found"
                  textParagraph="Try adjusting your search or filter to find what you're looking for."
                  className="col-span-full my-12"
                />
              )}
        </div>

        {!loading &&
          pagination.page < pagination.total_pages &&
          products.length > 0 && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={loadMore}
                disabled={loadingMore}
                className="cursor-pointer px-4 py-2 ring-1 ring-[var(--color-secondary-200)] bg-[var(--color-secondary-200)] hover:ring-[var(--color-primary)] text-gray-800 hover:bg-[var(--color-primary)] hover:text-white disabled:opacity-60 transition-all ease-in-out duration-300"
              >
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
      </section>
    </div>
  );
}
