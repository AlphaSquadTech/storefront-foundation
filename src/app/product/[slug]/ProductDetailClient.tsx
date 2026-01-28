"use client";

import Breadcrumb from "@/app/components/reuseableUI/breadcrumb";
import CommonButton from "@/app/components/reuseableUI/commonButton";
import PrimaryButton from "@/app/components/reuseableUI/primaryButton";
import Toast from "@/app/components/reuseableUI/Toast";
import EditorRenderer from "@/app/components/richText/EditorRenderer";
import { MinusIcon } from "@/app/utils/svgs/minusIcon";
import { PlusIcon } from "@/app/utils/svgs/plusIcon";
import { ProductInquiryIcon } from "@/app/utils/svgs/productInquiryIcon";
import { SpinnerIcon } from "@/app/utils/svgs/spinnerIcon";
import { SwiperArrowIconLeft } from "@/app/utils/svgs/swiperArrowIconLeft";
import { SwiperArrowIconRight } from "@/app/utils/svgs/swiperArrowIconRight";
import { CHECKOUT_CREATE } from "@/graphql/mutations/checkoutCreate";
import {
  FIND_PRODUCT_BY_OLD_SLUG,
  type FindProductByOldSlugData,
  type FindProductByOldSlugVars,
} from "@/graphql/queries/findProductByOldSlug";
import {
  AncillaryPage,
  fetchPageBySlug,
} from "@/graphql/queries/getPageBySlug";
import {
  ME_ADDRESSES_QUERY,
  type MeAddressesData,
} from "@/graphql/queries/meAddresses";
import {
  PRODUCT_DETAILS_BY_ID,
  type ProductDetailsByIdData,
  type ProductDetailsByIdVars,
} from "@/graphql/queries/productDetailsById";
import { FitmentData, shopApi } from "@/lib/api/shop";
import { generateBreadcrumbSchema, generateProductSchema } from "@/lib/schema";
import { useGlobalStore } from "@/store/useGlobalStore";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAppConfiguration } from "../../components/providers/ServerAppConfigurationProvider";
import {
  gtmAddToCart,
  gtmViewItem,
  Product,
} from "../../utils/googleTagManager";
import ItemInquiryModal from "./components/itemInquiryModal";
/* ---------------- helpers (local) ---------------- */
type AddressInputTS = {
  firstName: string;
  lastName: string;
  streetAddress1: string;
  city: string;
  postalCode: string;
  country: string;
  countryArea?: string;
  phone?: string;
};

type CheckoutLineInputTS = { variantId: string; quantity: number };

function resolveEndpoint() {
  const raw = process.env.NEXT_PUBLIC_API_URL || "/api/graphql";
  const lower = raw.trim().toLowerCase();
  return /\/graphql\/?$/.test(lower)
    ? raw.trim()
    : raw.replace(/\/+$/, "") + "/graphql";
}

async function createCheckout(input: {
  channel: string;
  email: string;
  lines: CheckoutLineInputTS[];
  shippingAddress?: AddressInputTS;
  billingAddress?: AddressInputTS;
}) {
  const res = await fetch(resolveEndpoint(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: CHECKOUT_CREATE, variables: { input } }),
  });
  if (!res.ok) throw new Error("Failed to create checkout");
  const json = await res.json();
  const errs = json?.data?.checkoutCreate?.errors;
  if (Array.isArray(errs) && errs.length)
    throw new Error(errs[0]?.message || "Checkout creation error");
  const id: string | undefined = json?.data?.checkoutCreate?.checkout?.id;
  const token: string | undefined = json?.data?.checkoutCreate?.checkout?.token;
  if (!id) throw new Error("No checkout id returned");
  return { checkoutId: id, checkoutToken: token };
}

function clearStoredCheckout() {
  try {
    localStorage.removeItem("checkoutId");
    localStorage.removeItem("checkoutToken");
  } catch {}
}
/* ------------------------------------------------ */

type EditorBlock =
  | { id: string; type: "paragraph"; data: { text: string } }
  | { id: string; type: "header"; data: { text: string; level?: number } }
  | {
      id: string;
      type: "list";
      data: { items: string[]; style?: "ordered" | "unordered" };
    }
  | {
      id: string;
      type: "quote";
      data: {
        text: string;
        caption?: string;
        alignment?: "left" | "center" | "right";
      };
    }
  | {
      id: string;
      type: "image";
      data: {
        file?: { url?: string };
        url?: string;
        caption?: string;
        withBorder?: boolean;
        withBackground?: boolean;
        stretched?: boolean;
      };
    };

export default function ProductDetailClient() {
  const params = useParams<{ slug: string }>();
  const [pdpContent, setPDPContent] = useState<AncillaryPage | null>(null);
  // The URL param contains the normalized slug (with single dashes)
  // We need to pass the original Saleor slug for the API query
  // Since we can't perfectly reconstruct it, we just use the normalized version
  // and rely on Saleor's flexible slug matching
  const slug = params?.slug ? decodeURIComponent(params.slug as string) : "";

  const channel = process.env.NEXT_PUBLIC_SALEOR_CHANNEL || "default-channel";
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {
    addToCart,
    isLoggedIn,
    user,
    guestEmail,
    guestShippingInfo,
    setCheckoutId,
    setCheckoutToken,
  } = useGlobalStore();

  const { getGoogleTagManagerConfig } = useAppConfiguration();
  const gtmConfig = getGoogleTagManagerConfig();

  const { data, loading, error } = useQuery<
    ProductDetailsByIdData,
    ProductDetailsByIdVars
  >(PRODUCT_DETAILS_BY_ID, {
    variables: { slug, channel },
    skip: !slug,
    fetchPolicy: "cache-first", // Use cache-first for better performance
    nextFetchPolicy: "cache-first", // Maintain cache-first on refetch
  });

  // Query to find product by old slug if the main query returns no product
  const shouldSkipOldSlugQuery = !slug || loading || !!data?.product;

  const {
    data: oldSlugData,
    loading: oldSlugLoading,
    fetchMore,
  } = useQuery<FindProductByOldSlugData, FindProductByOldSlugVars>(
    FIND_PRODUCT_BY_OLD_SLUG,
    {
      variables: { channel, first: 100 }, // Changed from 250 to 100 to match API limit
      skip: shouldSkipOldSlugQuery, // Only run if main query completed and found no product
      fetchPolicy: "cache-first", // Use cache-first for better performance
      nextFetchPolicy: "cache-first", // Maintain cache-first on refetch
    }
  );
  useEffect(() => {
    const fetchPageContent = async () => {
      if (
        product?.metadata.find((item) => item?.key === "availability")
          ?.value === "Please Call" ||
        product?.metadata.find((item) => item?.key === "availability")
          ?.value === "Available"
      )
        return;
      try {
        const pdpContentRenderer = await fetchPageBySlug(
          "call-for-availability"
        );
        setPDPContent(pdpContentRenderer);
      } catch (error) {
        console.error("Error fetching page content:", error);
      }
    };

    fetchPageContent();
  }, []);

  // State for tracking pagination
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [allProductsChecked, setAllProductsChecked] = useState(false);

  // Find product with matching old_slug or redirects in metadata (client-side filtering)
  const productWithOldSlug = useMemo(() => {
    if (!oldSlugData?.products?.edges || !slug) {
      return null;
    }

    const foundProduct =
      oldSlugData.products.edges.find((edge) => {
        // Check for "old_slug" metadata key
        const oldSlugMeta = edge.node.metadata?.find(
          (meta) => meta.key === "old_slug" && meta.value === slug
        );

        if (oldSlugMeta) {
          return true;
        }

        // Check for "redirects" metadata key (which can contain JSON array or comma-separated string)
        const redirectsMeta = edge.node.metadata?.find(
          (meta) => meta.key === "redirects"
        );

        if (redirectsMeta) {
          try {
            let redirects: string[] = [];
            let redirectsValue = redirectsMeta.value.trim();

            // Try to parse as JSON array first
            if (redirectsValue.startsWith("[")) {
              try {
                // Fix common JSON formatting issues
                redirectsValue = redirectsValue.replace(/\[([^"[])/g, '["$1'); // Add missing opening quote after [
                redirectsValue = redirectsValue.replace(/([^"\]])\]/g, '$1"]'); // Add missing closing quote before ]

                redirects = JSON.parse(redirectsValue);
              } catch (jsonError) {
                // If JSON parse fails, try comma-separated format
                redirects = redirectsValue
                  .replace(/^\[|\]$/g, "") // Remove [ and ]
                  .split(",")
                  .map((s) => s.trim().replace(/^["']|["']$/g, "")); // Remove quotes and trim
              }
            } else {
              // Handle comma-separated string format (no brackets)
              redirects = redirectsValue
                .split(",")
                .map((s) => s.trim().replace(/^["']|["']$/g, "")); // Remove quotes and trim
            }

            // Check if current slug matches any redirect
            const hasMatch =
              Array.isArray(redirects) &&
              redirects.some((redirect) => redirect === slug);

            if (hasMatch) {
              return true;
            }
          } catch (parseError) {
            // Silent fail - continue to next product
          }
        }

        return false;
      })?.node || null;

    return foundProduct;
  }, [oldSlugData, slug]);

  // Auto-fetch more products if not found in current batch and more pages exist
  useEffect(() => {
    const shouldFetchMore =
      !loading &&
      !data?.product &&
      !oldSlugLoading &&
      !productWithOldSlug &&
      !isFetchingMore &&
      !allProductsChecked &&
      oldSlugData?.products?.pageInfo?.hasNextPage &&
      oldSlugData?.products?.pageInfo?.endCursor;

    if (shouldFetchMore && fetchMore) {
      setIsFetchingMore(true);

      fetchMore({
        variables: {
          after: oldSlugData.products.pageInfo.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          setIsFetchingMore(false);

          if (!fetchMoreResult) {
            setAllProductsChecked(true);
            return prev;
          }

          // Check if there are no more pages
          if (!fetchMoreResult.products.pageInfo.hasNextPage) {
            setAllProductsChecked(true);
          }

          // Merge the results
          return {
            products: {
              ...fetchMoreResult.products,
              edges: [
                ...prev.products.edges,
                ...fetchMoreResult.products.edges,
              ],
            },
          };
        },
      }).catch((error) => {
        setIsFetchingMore(false);
        setAllProductsChecked(true);
      });
    }
  }, [
    loading,
    data?.product,
    oldSlugLoading,
    productWithOldSlug,
    isFetchingMore,
    allProductsChecked,
    oldSlugData,
    fetchMore,
  ]);

  // Prefill addresses for logged-in users (optional, non-blocking)
  const { data: meData } = useQuery<MeAddressesData>(ME_ADDRESSES_QUERY, {
    skip: !isLoggedIn,
  });

  const accountShipping = useMemo(() => {
    const me = meData?.me;
    if (!me || !me.addresses?.length) return null;
    const defId = me.defaultShippingAddress?.id;
    return (
      (defId ? me.addresses.find((a) => a.id === defId) : me.addresses[0]) ||
      null
    );
  }, [meData]);

  const accountBilling = useMemo(() => {
    const me = meData?.me;
    if (!me || !me.addresses?.length) return null;
    const defId = me.defaultBillingAddress?.id;
    return (
      (defId
        ? me.addresses.find((a) => a.id === defId)
        : accountShipping || me.addresses[0]) || null
    );
  }, [meData, accountShipping]);

  const product = data?.product ?? null;
  const [isComingFromRedirect, setIsComingFromRedirect] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("productRedirecting") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (product && isComingFromRedirect) {
      sessionStorage.removeItem("productRedirecting");
      setIsComingFromRedirect(false);
    }
  }, [product, isComingFromRedirect]);

  // Handle redirect if old slug is found
  useEffect(() => {
    if (!loading && !data?.product && !oldSlugLoading && productWithOldSlug) {
      const newSlug = productWithOldSlug.slug;

      sessionStorage.setItem("productRedirecting", "true");

      // Redirect to the new slug, preserving any query parameters
      const currentParams = searchParams.toString();
      const newUrl = `/product/${newSlug}${
        currentParams ? `?${currentParams}` : ""
      }`;

      router.replace(newUrl);
    }
  }, [
    loading,
    data?.product,
    oldSlugLoading,
    productWithOldSlug,
    router,
    searchParams,
    slug,
  ]);
  const images = product?.media ?? [];
  const firstImageUrl = images[0]?.url ?? "";

  // Track product view when product data is loaded
  useEffect(() => {
    if (product && !loading) {
      const productData: Product = {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category?.name || "Products",
        price: product.pricing?.priceRange?.start?.gross?.amount || 0,
        currency: product.pricing?.priceRange?.start?.gross?.currency || "USD",
        item_brand: product.category?.name || undefined,
      };

      gtmViewItem(
        [productData],
        productData.currency,
        productData.price,
        gtmConfig?.container_id
      );
    }
  }, [product, loading]);
  const [selectedImage, setSelectedImage] = useState<string>(firstImageUrl);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null
  );
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdding, setIsAdding] = useState(false);
  const [buying, setBuying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Function to update URL with SKU parameter
  const updateURLWithSKU = useCallback(
    (sku: string | null) => {
      if (!sku) {
        // Remove SKU param if no SKU
        router.replace(pathname, { scroll: false });
        return;
      }

      // Convert SKU to URL-friendly format (replace spaces with hyphens)
      const urlFriendlySKU = sku.replace(/\s+/g, "-");

      const params = new URLSearchParams();
      params.set("sku", urlFriendlySKU);

      const newURL = `${pathname}?${params.toString()}`;
      router.replace(newURL, { scroll: false });
    },
    [pathname, router]
  );

  // Toast with unmount cleanup
  const [toast, setToast] = useState<{
    message: string;
    subParagraph?: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showToast = useCallback(
    (
      message: string,
      subParagraph?: string,
      type: "success" | "error" | "info" = "info"
    ) => {
      setToast({ message, subParagraph, type });
      if (toastTimer.current) clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast(null), 2500);
    },
    []
  );
  const raw = product?.description || "";
  const lineHeight = 28; // px
  const maxLines = 10;
  const maxHeight = lineHeight * maxLines;
  const [showFull, setShowFull] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const height = descriptionRef.current.scrollHeight;
      if (height > maxHeight) {
        setIsOverflow(true);
      }
    }
  }, [raw]);

  const toggleShow = () => setShowFull(!showFull);
  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    []
  );

  // Keep selected image in sync with first loaded image (simpler, no useMemo)
  useEffect(() => {
    if (firstImageUrl) setSelectedImage(firstImageUrl);
  }, [firstImageUrl]);

  // Initialize variant selection from URL or default to first variant
  useEffect(() => {
    if (!product?.variants?.length || isInitialized) return;

    const skuFromURL = searchParams.get("sku");

    if (skuFromURL) {
      // Convert URL-friendly SKU back to original format (replace hyphens with spaces)
      const originalSKU = skuFromURL.replace(/-/g, " ");

      // Try to find variant by SKU from URL (check both formats for compatibility)
      const variantFromURL = product.variants.find(
        (v) => v.sku === originalSKU || v.sku === skuFromURL
      );

      if (variantFromURL) {
        setSelectedVariantId(variantFromURL.id);
        setIsInitialized(true);
        return;
      }
    }

    // Default to first variant if no SKU in URL or SKU not found
    if (product.variants[0]?.id) {
      setSelectedVariantId(product.variants[0].id);
      setIsInitialized(true);
    }
  }, [product?.variants, searchParams, isInitialized]);

  const selectedVariant = useMemo(() => {
    if (!product?.variants?.length) return null;
    return (
      product.variants.find((v) => v.id === (selectedVariantId ?? "")) ??
      product.variants[0]
    );
  }, [product, selectedVariantId]);

  // Update URL with SKU when variant changes (after initialization)
  useEffect(() => {
    if (isInitialized && selectedVariant?.sku) {
      updateURLWithSKU(selectedVariant.sku);
    }
  }, [isInitialized, selectedVariant?.sku, updateURLWithSKU]);

  // ---------- PRICING (variant-first) ----------
  const variantPrice = selectedVariant?.pricing?.price?.gross ?? null;
  const variantOriginal =
    selectedVariant?.pricing?.priceUndiscounted?.gross ?? null;

  const rawCurrentPrice =
    variantPrice?.amount ??
    product?.pricing?.priceRange?.start?.gross?.amount ??
    0;

  const currency =
    variantPrice?.currency ??
    variantOriginal?.currency ??
    product?.pricing?.priceRange?.start?.gross?.currency ??
    "USD";

  // ✅ Calculate original price correctly: discounted price + discount amount
  const discountAmount = product?.pricing?.discount?.gross?.amount ?? 0;
  const rawOriginalPrice =
    discountAmount > 0
      ? rawCurrentPrice + discountAmount // Original = Current + Discount
      : variantOriginal?.amount ??
        product?.pricing?.priceRange?.stop?.gross?.amount ??
        null;

  // Format prices properly (convert from cents if needed)
  const currentPrice = rawCurrentPrice;
  const originalPrice = rawOriginalPrice;

  // ✅ Use Saleor's discount info for more accurate detection
  const hasDiscount =
    discountAmount > 0 ||
    (typeof originalPrice === "number" && originalPrice > currentPrice);
  const compareAt = hasDiscount ? originalPrice : null;

  // Memoized formatter
  const moneyFmt = useMemo(
    () => new Intl.NumberFormat(undefined, { style: "currency", currency }),
    [currency]
  );
  // --------------------------------------------

  // Effect to update schema.org structured data when variant changes
  useEffect(() => {
    if (!product || !selectedVariant) return;

    const productSchema = generateProductSchema({
      id: product.id,
      name: product.name,
      description: product.description || "",
      image: images.map((img) => img.url),
      price: currentPrice,
      currency: currency,
      availability:
        selectedVariant.quantityAvailable &&
        selectedVariant.quantityAvailable > 0
          ? "InStock"
          : "OutOfStock",
      sku: selectedVariant.sku || product.id,
      brand: product.category?.name,
      rating: undefined,
      reviewCount: undefined,
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Products", url: "/products/all" },
      { name: product.name, url: `/product/${slug}` },
    ]);

    // Remove existing schema scripts
    const existingSchemas = document.querySelectorAll(
      "script[data-schema-type]"
    );
    existingSchemas.forEach((script) => script.remove());

    // Add updated product schema
    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.setAttribute("data-schema-type", "product");
    productScript.textContent = JSON.stringify(productSchema);
    document.head.appendChild(productScript);

    // Add breadcrumb schema
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.setAttribute("data-schema-type", "breadcrumb");
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    // Cleanup on unmount
    return () => {
      const schemas = document.querySelectorAll("script[data-schema-type]");
      schemas.forEach((script) => script.remove());
    };
  }, [product, selectedVariant, currentPrice, currency, images, slug]);

  // Helper to read attribute value by slug from selected variant
  const getAttrVal = useCallback(
    (slug: string) => {
      const attr = selectedVariant?.attributes?.find(
        (a) => a.attribute?.slug === slug
      );
      return attr?.values?.[0]?.name ?? null;
    },
    [selectedVariant]
  );
  const lengthVal = getAttrVal("length_in") || getAttrVal("length");
  const heightVal = getAttrVal("height_in") || getAttrVal("height");
  const widthVal = getAttrVal("width_in") || getAttrVal("width");

  // Cap quantity by available stock when present
  const maxQty = selectedVariant?.quantityAvailable ?? undefined;
  const decQty = () => setQuantity((q) => Math.max(1, q - 1));
  const incQty = () => setQuantity((q) => Math.min(q + 1));

  const onQtyInput = (val: string) => {
    const n = Number.parseInt(val, 10);
    const safe = Number.isFinite(n) ? Math.max(1, n) : 1;
    setQuantity(maxQty ? Math.min(safe, maxQty) : safe);
  };
  const handleAddToCart = async () => {
    if (!product) return;
    try {
      setIsAdding(true);
      await addToCart({
        id: selectedVariant?.id ?? product.id,
        name: product.name,
        price: currentPrice,
        image: images[0]?.url ?? "",
        category: product?.category?.name ?? "N/A",
        quantity,
      });

      // Track add to cart event in GTM
      const productData: Product = {
        item_id: selectedVariant?.id ?? product.id,
        item_name: product.name,
        item_category: product?.category?.name || "Products",
        price: currentPrice,
        quantity: quantity,
        currency: "USD",
        item_brand: product?.category?.name || undefined,
      };

      gtmAddToCart(
        [productData],
        "USD",
        currentPrice * quantity,
        gtmConfig?.container_id
      );

      showToast(
        "ITEM ADDED TO CART",
        "Your item has been added. You can continue shopping or proceed to checkout.",
        "success"
      );
    } catch {
      showToast("Failed to add to cart", "Please try again later.", "error");
    } finally {
      setTimeout(() => setIsAdding(false), 400);
    }
  };

  // Build Address from account node
  const buildAddressFromAccount = useCallback(
    (
      acc?: {
        firstName?: string | null;
        lastName?: string | null;
        streetAddress1?: string | null;
        city?: string | null;
        postalCode?: string | null;
        country?: { code?: string | null } | null;
        countryArea?: string | null;
        phone?: string | null;
        companyName?: string | null;
      } | null
    ): AddressInputTS | undefined => {
      if (!acc) return undefined;
      return {
        firstName: acc.firstName || "Guest",
        lastName: acc.lastName || "User",
        streetAddress1: acc.streetAddress1 || "N/A",
        city: acc.city || "Karachi",
        postalCode: acc.postalCode || "00000",
        country: acc.country?.code || "US",
        countryArea: acc.countryArea || undefined,
        phone: acc.phone || undefined,
      };
    },
    []
  );

  // BUY NOW (add to cart first, then create checkout and redirect)
  const handleBuyNow = useCallback(async () => {
    if (!product || !selectedVariant?.id) {
      showToast(
        "Please select a variant",
        "Please select a variant before buying.",
        "error"
      );
      return;
    }
    if (quantity < 1) {
      showToast(
        "Quantity must be at least 1",
        "Please enter a quantity of at least 1.",
        "error"
      );
      return;
    }

    try {
      setBuying(true);

      // ✅ Step 1: Add to cart first so checkout page shows correct amount
      await addToCart({
        id: selectedVariant.id,
        name: product.name,
        price: currentPrice,
        image: images[0]?.url ?? "",
        category: product?.category?.name ?? "N/A",
        quantity,
      });

      // Clear any stale checkout in store + localStorage
      clearStoredCheckout();
      try {
        useGlobalStore.getState().setCheckoutId(null);
        const setTok = useGlobalStore.getState().setCheckoutToken as
          | ((v: string | null) => void)
          | undefined;
        setTok?.(null);
      } catch {}

      // Build lines
      const lines: CheckoutLineInputTS[] = [
        { variantId: selectedVariant.id, quantity },
      ];

      // Email
      const email =
        (isLoggedIn
          ? user?.email || meData?.me?.email || ""
          : guestEmail || "guest@example.com") || "guest@example.com";

      // Create checkout without addresses to avoid validation errors
      const { checkoutId, checkoutToken } = await createCheckout({
        channel,
        email,
        lines,
      });

      // Persist in store + localStorage
      setCheckoutId(checkoutId);
      if (checkoutToken) setCheckoutToken(checkoutToken);
      try {
        localStorage.setItem("checkoutId", checkoutId);
        if (checkoutToken) localStorage.setItem("checkoutToken", checkoutToken);
      } catch {}

      // Go
      router.push(`/checkout?checkoutId=${encodeURIComponent(checkoutId)}`);
    } catch (e) {
      console.error("[BuyNow] error:", e);
      showToast(
        e instanceof Error ? e.message : "Unable to start checkout",
        "error"
      );
    } finally {
      setBuying(false);
    }
  }, [
    product,
    selectedVariant?.id,
    quantity,
    addToCart,
    currentPrice,
    images,
    isLoggedIn,
    user?.email,
    meData?.me?.email,
    guestEmail,
    guestShippingInfo,
    accountShipping,
    accountBilling,
    buildAddressFromAccount,
    channel,
    setCheckoutId,
    setCheckoutToken,
    router,
    showToast,
  ]);
  const productBreadcrumbItems = [
    { text: "HOME", link: "/" },
    { text: "PRODUCT", link: "/products/all" },
    { text: product?.name ?? "" },
  ];

  const baseText =
    "text-[var(--color-secondary-800)] font-secondary -tracking-[0.045px]";
  type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  // NOTE: Assumes product.description (Editor.js JSON) is already sanitized server-side.
  const renderBlock = (b: EditorBlock) => {
    switch (b.type) {
      case "quote": {
        const align =
          b.data.alignment === "center"
            ? "text-center"
            : b.data.alignment === "right"
            ? "text-right"
            : "text-left";
        return (
          <figure key={b.id} className={`not-prose ${align}`}>
            <blockquote
              className="border-l-4 pl-4 py-2 italic bg-[var(--color-secondary-200)]  text-[var(--color-secondary-800)]"
              dangerouslySetInnerHTML={{ __html: b.data.text || "" }}
            />
            {b.data.caption && (
              <figcaption
                className="mt-1 text-sm text-[var(--color-secondary-600)]"
                dangerouslySetInnerHTML={{ __html: b.data.caption }}
              />
            )}
          </figure>
        );
      }
      case "header": {
        const level = Math.min(Math.max(b.data.level ?? 1, 1), 6);
        const Tag = `h${level}` as HeadingTag;
        return (
          <Tag
            key={b.id}
            className={`${baseText} ${
              level === 1 ? "text-2xl font-semibold" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: b.data.text || "" }}
          />
        );
      }
      case "list": {
        const ordered = (b.data.style || "unordered") === "ordered";
        const ListTag = (ordered ? "ol" : "ul") as "ol" | "ul";
        return (
          <ListTag
            key={b.id}
            className={`${baseText} pl-5 space-y-3 ${
              ordered ? "list-decimal" : "list-disc"
            } marker:text-[var(--color-primary-600)] text-sm lg:text-lg`}
          >
            {b.data.items.map((it, i) => (
              <li
                key={`${b.id}-${i}`}
                dangerouslySetInnerHTML={{ __html: it }}
              />
            ))}
          </ListTag>
        );
      }
      case "image": {
        // Handle Editor.js image blocks
        const imageData = b.data as {
          file?: { url?: string };
          url?: string;
          caption?: string;
          withBorder?: boolean;
          withBackground?: boolean;
          stretched?: boolean;
        };
        const imageUrl = imageData.file?.url || imageData.url;
        
        // Skip rendering if no valid image URL
        if (!imageUrl) {
          return null;
        }

        // Check if URL is valid (not empty, not just a placeholder)
        const isValidUrl = imageUrl.startsWith('http') || imageUrl.startsWith('/');
        if (!isValidUrl) {
          return null;
        }

        return (
          <figure
            key={b.id}
            className={`my-4 ${imageData.stretched ? "w-full" : "max-w-2xl mx-auto"}`}
          >
            <img
              src={imageUrl}
              alt={imageData.caption || "Product description image"}
              className={`w-full h-auto rounded-lg ${
                imageData.withBorder ? "border border-gray-200" : ""
              } ${imageData.withBackground ? "bg-gray-50 p-4" : ""}`}
              onError={(e) => {
                // Hide broken images
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {imageData.caption && (
              <figcaption className="text-sm text-gray-600 text-center mt-2 italic">
                {imageData.caption}
              </figcaption>
            )}
          </figure>
        );
      }
      case "paragraph":
      default: {
        const html = (b.data.text || "").replace(/\n/g, "<br/>");

        if (html.includes("<dt>") && html.includes("<dd>")) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");

          const allDts = Array.from(doc.querySelectorAll("dt"));
          const allDds = Array.from(doc.querySelectorAll("dd"));

          const pairs: Array<{ term: string; description: string }> = [];

          allDts.forEach((dt, i) => {
            const term = dt.textContent?.trim() || "";
            const description = allDds[i]?.textContent?.trim() || "";

            if (term) {
              pairs.push({ term, description });
            }
          });

          const categoryHideDiv = doc.querySelector(".category-hide");
          let remainingText = "";

          if (categoryHideDiv) {
            const bodyContent = doc.body.textContent || "";
            const categoryShowDiv = doc.querySelector(".category-show");

            if (categoryShowDiv) {
              const clone = doc.body.cloneNode(true) as HTMLElement;
              const showDivClone = clone.querySelector(".category-show");
              if (showDivClone) {
                showDivClone.remove();
              }
              remainingText = clone.textContent?.trim() || "";
            }
          } else {
            const dlElement = doc.querySelector("dl");
            if (dlElement) {
              const parent = dlElement.parentElement;
              if (parent) {
                let nextSibling = parent.nextSibling;
                const textParts: string[] = [];

                while (nextSibling) {
                  if (nextSibling.nodeType === Node.TEXT_NODE) {
                    const text = nextSibling.textContent?.trim();
                    if (text) textParts.push(text);
                  } else if (nextSibling.nodeType === Node.ELEMENT_NODE) {
                    const text = (nextSibling as Element).textContent?.trim();
                    if (text) textParts.push(text);
                  }
                  nextSibling = nextSibling.nextSibling;
                }

                remainingText = textParts.join(" ");
              }
            }
          }

          if (pairs.length > 0) {
            return (
              <div key={b.id}>
                <div className="w-full my-4">
                  <table className="w-full border-collapse border border-[var(--color-secondary-300)]">
                    <tbody>
                      {pairs.map((item, i) => (
                        <tr
                          key={i}
                          className="border-b border-[var(--color-secondary-200)] hover:bg-[var(--color-secondary-50)] transition-colors"
                        >
                          <td
                            className={`px-3 py-2 font-semibold ${baseText} text-sm lg:text-base bg-gray-200 w-1/3 align-top border-r border-[var(--color-secondary-200)]`}
                          >
                            {item.term}
                          </td>
                          <td
                            className={`px-3 py-2 ${baseText} text-sm lg:text-base align-top`}
                          >
                            {item.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {remainingText && (
                  <div className={`${baseText} text-sm lg:text-base mt-4`}>
                    {remainingText}
                  </div>
                )}
              </div>
            );
          }
        }
        return (
          <div
            key={b.id}
            className={`${baseText} text-sm lg:text-base`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }
    }
  };

  const renderDescription = () => {
    try {
      const parsed = JSON.parse(raw) as { blocks?: EditorBlock[] };
      if (parsed?.blocks?.length) {
        return (
          <div className="relative pb-12">
            <div
              ref={descriptionRef}
              className={`space-y-2 [&_ul]:pl-5 [&_ol]:pl-5 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:marker:text-[var(--color-primary-600)] [&_a]:underline [&_a]:text-[var(--color-primary-600)] hover:[&_a]:text-[var(--color-primary-700)] overflow-hidden transition-all duration-300
                      ${!showFull ? "line-clamp-[10]" : ""}`}
              style={{ maxHeight: showFull ? "none" : `${maxHeight}px` }}
            >
              {parsed.blocks.map(renderBlock)}
            </div>

            {isOverflow && (
              <CommonButton
                onClick={toggleShow}
                className={`absolute bottom-0 px-0 ${
                  showFull ? "mt-0" : "mt-4"
                } underline text-sm md:text-base hover:underline-offset-4 hover:text-[var(--color-primary)]`}
              >
                {showFull ? "View Less" : "View More"}
              </CommonButton>
            )}
          </div>
        );
      }
    } catch {
      // Fallback to plain text
      return <p className={`${baseText} text-lg`}>{raw}</p>;
    }
  };
  const btnSecondary =
    "border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold  transition-colors";

  // Show loading during initial load, old slug search, and while fetching more
  // But don't show loading skeleton if we're coming from a redirect (to avoid double loading glitch)
  const isLoading =
    (loading || oldSlugLoading || isFetchingMore) && !isComingFromRedirect;

  const hasAnyDimension =
    parseFloat(lengthVal || "0") > 0 ||
    parseFloat(widthVal || "0") > 0 ||
    parseFloat(heightVal || "0") > 0 ||
    (selectedVariant?.weight?.value ?? 0) > 0;

  const [isZoomed, setIsZoomed] = useState(false);
  const [fitmentData, setFitmentData] = useState<FitmentData[] | null>(null);
  const [fitmentLoading, setFitmentLoading] = useState(false);
  const [fitmentError, setFitmentError] = useState<string | null>(null);
  const [fitmentPage, setFitmentPage] = useState(1);
  const FITMENTS_PER_PAGE = 10;
  const [activeTab, setActiveTab] = useState<
    "description" | "details" | "compatible-vehicles"
  >("description");

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => {
    setIsZoomed(false);
    setMousePosition({ x: 50, y: 50 });
  };

  const scrollToSelectedThumbnail = useCallback(
    (imageUrl: string) => {
      if (!thumbnailContainerRef.current) return;

      const container = thumbnailContainerRef.current;
      const selectedIndex = images.findIndex((img) => img.url === imageUrl);

      if (selectedIndex === -1) return;

      const thumbnailWidth = 80;
      const scrollPosition = selectedIndex * (thumbnailWidth + 8);

      container.scrollTo({
        left: scrollPosition - container.clientWidth / 2 + thumbnailWidth / 2,
        behavior: "smooth",
      });
    },
    [images]
  );

  useEffect(() => {
    if (selectedImage) {
      scrollToSelectedThumbnail(selectedImage);
    }
  }, [selectedImage, scrollToSelectedThumbnail]);

  useEffect(() => {
    const fetchFitmentData = async () => {
      try {
        setFitmentLoading(true);
        setFitmentError(null);
        const numericId = product?.id;
        if (!numericId) {
          setFitmentData(null);
          return;
        }
        const response = await shopApi.getFitmentValuesId(numericId);
        setFitmentData(response.data);
      } catch (error) {
        console.error("Error fetching fitment data:", error);
        setFitmentError("Failed to load fitment data");
      } finally {
        setFitmentLoading(false);
      }
    };

    fetchFitmentData();
  }, [product?.id]);

  const processedFitmentData = useMemo(() => {
    if (!fitmentData || fitmentData.length === 0) return [];

    const fitmentSets: Array<Record<string, string>> = [];

    fitmentData.forEach((item) => {
      const groups = item.fitment_group_set.fitment_groups;

      const fitmentSet: Record<string, string> = {};

      groups.forEach((group) => {
        if (group.fitment_value.fitment.is_hidden) {
          return;
        }

        const key = group.fitment_value.fitment.fitment;
        const value = group.fitment_value.fitment_value;

        fitmentSet[key] = value;
      });

      if (Object.keys(fitmentSet).length > 0) {
        fitmentSets.push(fitmentSet);
      }
    });

    return fitmentSets;
  }, [fitmentData]);

  const displayedFitments = useMemo(() => {
    const endIndex = fitmentPage * FITMENTS_PER_PAGE;
    return processedFitmentData.slice(0, endIndex);
  }, [processedFitmentData, fitmentPage]);

  const hasMoreFitments =
    processedFitmentData.length > displayedFitments.length;

  const fitmentKeys = useMemo(() => {
    const keys = new Set<string>();
    processedFitmentData.forEach((fitmentSet) => {
      Object.keys(fitmentSet).forEach((key) => keys.add(key));
    });
    return Array.from(keys);
  }, [processedFitmentData]);

  return (
    <>
      <div className="lg:container lg:mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-4 lg:py-24">
        {/* Loading state handled by loading.tsx at route level */}

        {error && <div className="text-red-600">Failed to load product.</div>}
        {!isLoading &&
          !product &&
          !productWithOldSlug &&
          !error &&
          !isComingFromRedirect && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-[var(--color-secondary-800)] mb-2">
                Product Not Found
              </h2>
              <p className="text-[var(--color-secondary-600)] mb-6">
                The product you&apos;re looking for doesn&apos;t exist or has
                been removed.
              </p>
              <CommonButton
                onClick={() => router.push("/products/all")}
                variant="primary"
                className="mx-auto"
              >
                Browse All Products
              </CommonButton>
            </div>
          )}

        {product && (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-8 lg:gap-12 w-full">
              {/* Image Gallery */}
              <div>
                <Breadcrumb items={productBreadcrumbItems} />
                <div className="lg:sticky lg:top-36 lg:self-start mt-5">
                  <div
                    className="relative w-full aspect-square bg-[#F7F7F7] border border-[var(--color-secondary-200)] overflow-hidden cursor-zoom-in"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasDiscount && (
                      <span className="absolute top-3 right-3 z-10 inline-flex items-center bg-[var(--color-primary-600)] px-3 py-1 text-base uppercase text-white font-secondary -tracking-[0.04px]">
                        Sale
                      </span>
                    )}
                    {selectedImage ? (
                      <Image
                        src={selectedImage}
                        alt={product.name || "Product image"}
                        fill
                        className="object-contain transition-transform duration-200 ease-out"
                        style={{
                          transform: isZoomed ? "scale(2.5)" : "scale(1)",
                          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                        }}
                      />
                    ) : (
                      <Image
                        src={"/no-image-avail-large.png"}
                        alt={"no-image-avail-large"}
                        fill
                        quality={90}
                        sizes="100vw"
                        className="object-contain transition-transform duration-200 ease-out"
                        style={{
                          transform: isZoomed ? "scale(2.5)" : "scale(1)",
                          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                        }}
                      />
                    )}
                  </div>

                  {images.length > 0 && (
                    <div className="relative flex items-center justify-between gap-2 mt-3">
                      {/* Previous Arrow */}
                      <button
                        type="button"
                        className="cursor-pointer size-fit"
                        onClick={() => {
                          const currentIndex = images.findIndex(
                            (img) => img.url === selectedImage
                          );
                          const prevIndex =
                            currentIndex > 0
                              ? currentIndex - 1
                              : images.length - 1;
                          setSelectedImage(images[prevIndex].url);
                        }}
                        disabled={images.length <= 1}
                      >
                        <span
                          style={{
                            color: "var(--color-secondary-800)",
                          }}
                          className="size-8 md:size-10 block p-2 rounded-full bg-[var(--color-secondary-200)] disabled:opacity-50 hover:bg-[var(--color-secondary-300)]"
                        >
                          {SwiperArrowIconLeft}
                        </span>
                      </button>

                      {/* Thumbnails */}
                      <div
                        ref={thumbnailContainerRef}
                        className="flex gap-2 overflow-auto hideScrollbar scroll-smooth"
                      >
                        {images.map((img) => {
                          const isActive = selectedImage === img.url;
                          return (
                            <button
                              key={img.id}
                              type="button"
                              className={`relative size-16 md:size-20 flex-shrink-0 lg:size-24 bg-[#F7F7F7] border cursor-pointer overflow-hidden transition-all duration-200 ${
                                isActive
                                  ? "border-[var(--color-primary-600)] border-2 opacity-100 scale-105"
                                  : "opacity-50 border-[var(--color-secondary-200)] hover:opacity-75"
                              }`}
                              aria-pressed={isActive}
                              onClick={() => setSelectedImage(img.url)}
                            >
                              <Image
                                src={img.url}
                                alt={img.alt || "thumb"}
                                fill
                                className="object-contain"
                              />
                            </button>
                          );
                        })}
                      </div>

                      {/* Next Arrow */}
                      <button
                        type="button"
                        className="cursor-pointer size-fit"
                        onClick={() => {
                          const currentIndex = images.findIndex(
                            (img) => img.url === selectedImage
                          );
                          const nextIndex =
                            currentIndex < images.length - 1
                              ? currentIndex + 1
                              : 0;
                          setSelectedImage(images[nextIndex].url);
                        }}
                        disabled={images.length <= 1}
                      >
                        <span
                          style={{
                            color: "var(--color-secondary-800)",
                          }}
                          className="size-8 md:size-10 block p-2 rounded-full bg-[var(--color-secondary-200)] disabled:opacity-50 hover:bg-[var(--color-secondary-300)]"
                        >
                          {SwiperArrowIconRight}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div>
                {/* Brand/Collection */}
                {/* {!!product.collections?.length && (
              <div className="font-secondary text-xl -tracking-[0.05px] text-[var(--color-primary-700)] font-bold flex gap-1">
                <span className="text-[var(--color-secondary-600)] font-normal">
                  BRAND
                </span>
                {product.collections.map((c) => c.name).join(", ")}
              </div>
            )} */}
                <h1 className="text-xl lg:text-3xl font-primary uppercase -tracking-[0.09px] mb-2">
                  {product.name}
                </h1>

                {/* Meta: SKU and stock */}
                {selectedVariant && (
                  <div className="text-xl flex items-center gap-3 font-secondary -tracking-[0.045px] text-[var(--color-secondary-600)] mb-4">
                    <span>
                      SKU:{" "}
                      <span className="font-semibold text-[var(--color-secondary-800)]">
                        {selectedVariant.sku}
                      </span>
                    </span>
                    {/* {typeof selectedVariant.quantityAvailable === "number" && (
                    <p className="text-sm lg:text-base font-semibold bg-[var(--color-secondary-100)] px-2 py-[2px] text-white">
                      IN STOCK:{" "}
                      <span className="font-medium">
                        {selectedVariant.quantityAvailable}
                      </span>
                    </p>
                  )} */}
                  </div>
                )}

                {product?.metadata.find((item) => item?.key === "availability")
                  ?.value === "Please Call" && (
                  <div className="border border-[var(--color-secondary-600)] px-4 mt-8 bg-[var(--color-secondary-200)] [&>div>p:nth-child(1)]:text-xl [&>div>p:nth-child(1)]:text-[var(--color-primary-500)] [&>div>p:nth-child(1)]:font-semibold">
                    <EditorRenderer content={pdpContent?.content ?? null} />
                  </div>
                )}
                {/* Price */}
                {product?.metadata.find((item) => item?.key === "availability")
                  ?.value === "Limited Supply" && (
                  <p className="font-semibold bg-[var(--color-secondary-100)] px-2 py-[2px] text-[var(--color-secondary-50)] mt-4 w-fit">
                    LIMITED SUPPLY
                  </p>
                )}
                {product?.metadata.find((item) => item?.key === "availability")
                  ?.value !== "Please Call" && (
                  <div className="my-5 flex items-center gap-2 font-secondary">
                    <span className="text-3xl text-[var(--color-primary-700)] font-semibold -tracking-[0.075px]">
                      {moneyFmt.format(currentPrice)}
                    </span>
                    {compareAt !== null && (
                      <span className="text-lg text-[var(--color-secondary-400)] line-through font-medium -tracking-[0.045px]">
                        {moneyFmt.format(compareAt)}
                      </span>
                    )}
                  </div>
                )}

                {product.variants.find(
                  (item) => item.id === selectedVariant?.id
                )?.quantityAvailable === 0 && (
                  <p className="text-sm bg-red-100 border rounded-full border-red-400 text-red-500 font-secondary -tracking-[0.045px] px-2 py-0.5 mb-4 w-fit font-secondary">
                    Out of Stock
                  </p>
                )}

                {/* Product Message from Metadata */}
                {(() => {
                  const productMessage = product?.metadata?.find(
                    (item) => item.key === "product_message"
                  )?.value;

                  const shippingIsActive =
                    product?.metadata
                      ?.find((item) => item.key === "shipping_isactive")
                      ?.value?.toLowerCase() === "true";

                  // Only show the product message if shipping_isactive is true
                  if (productMessage && shippingIsActive) {
                    return (
                      <div className="my-5 p-4 bg-[var(--color-secondary-100)] border-l-4 border-[var(--color-primary-600)] rounded-r">
                        <p className="text-sm lg:text-base text-[var(--color-secondary-800)] font-secondary -tracking-[0.045px]">
                          {productMessage}
                        </p>
                      </div>
                    );
                  }
                  return null;
                })()}

                {/* Variants */}
                {product?.metadata.find((item) => item?.key === "availability")
                  ?.value !== "Please Call" && (
                  <>
                    {!!product.variants?.length &&
                      product.variants?.length !== 1 && (
                        <div className="mb-10">
                          <label className="block font-secondary text-lg font-semibold text-[var(--color-secondary-800)] uppercase mb-4 -tracking-[0.045px]">
                            Variant
                          </label>
                          <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                            role="radiogroup"
                            aria-label="Variants"
                          >
                            {product.variants.map((v) => {
                              const selected =
                                (selectedVariant?.id ??
                                  product.variants[0].id) === v.id;
                              return (
                                <div
                                  key={v.id}
                                  role="radio"
                                  aria-checked={selected}
                                  onClick={() => setSelectedVariantId(v.id)}
                                  className={`border flex justify-between font-secondary w-full items-center px-4 py-5 cursor-pointer transition-colors ${
                                    selected
                                      ? "border-[var(--color-primary-100)] bg-[var(--color-primary-50)] text-[var(--color-primary-700)]"
                                      : "border-[var(--color-secondary-200)] hover:bg-gray-50"
                                  }`}
                                >
                                  <div className="flex items-center gap-3 text-sm md:text-base">
                                    <input
                                      type="radio"
                                      name="variant"
                                      className="accent-[var(--color-primary-600)]"
                                      checked={selected}
                                      onChange={() =>
                                        setSelectedVariantId(v.id)
                                      }
                                    />
                                    <p
                                      title={v.name}
                                      className="font-medium  -tracking-[0.04px]"
                                    >
                                      {v.name}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                  </>
                )}
                {/* Add to Cart + Buy Now */}
                {product?.metadata.find((item) => item?.key === "availability")
                  ?.value !== "Please Call" && (
                  <div className="space-y-3">
                    <div
                      className={`flex items-center group border border-[var(--color-secondary-200)]  w-full ${
                        currentPrice === 0
                          ? "opacity-50 pointer-events-none"
                          : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={`${btnSecondary} px-2 py-3 !border-0 hover:!bg-[var(--color-secondary-200)] transition-all ease-in-out duration-300 h-full cursor-pointer w-full flex items-center justify-center`}
                        onClick={decQty}
                      >
                        <span className="size-4 block">{MinusIcon}</span>
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={maxQty ?? undefined}
                        value={quantity}
                        inputMode="numeric"
                        className="text-center outline-none border-x border-[var(--color-secondary-200)] w-full select-none"
                        onChange={(e) => onQtyInput(e.target.value)}
                      />
                      <button
                        type="button"
                        className={`${btnSecondary} px-2 py-3 !border-0 w-full cursor-pointer hover:!bg-[var(--color-secondary-200)] transition-all ease-in-out duration-300 flex items-center justify-center`}
                        onClick={incQty}
                      >
                        <span className="size-4 block">{PlusIcon}</span>
                      </button>
                    </div>

                    <CommonButton
                      className="w-full"
                      onClick={handleAddToCart}
                      disabled={!product || isAdding || currentPrice === 0}
                      variant="secondary"
                    >
                      {isAdding ? (
                        <span className="flex size-6 items-center justify-center w-full">
                          {SpinnerIcon}
                        </span>
                      ) : (
                        "Add to Cart"
                      )}
                    </CommonButton>

                    <PrimaryButton
                      content={buying ? "Processing..." : "Buy Now"}
                      className="w-full text-base font-semibold leading-[24px] tracking-[-0.04px] py-3 px-4"
                      onClick={handleBuyNow}
                      disabled={
                        buying || !selectedVariant || currentPrice === 0
                      }
                    />
                  </div>
                )}
                <div
                  onClick={() => setShowInquiryModal(true)}
                  className="mt-4 flex items-center gap-1 cursor-pointer hover:text-[var(--color-primary)] transition-all ease-in-out duration-300"
                >
                  {ProductInquiryIcon} <p>Item Inquiry</p>{" "}
                </div>

                {/* Extra details (Dimensions/Weight) */}
              </div>
            </div>
            <div className="mt-14">
              {/* Tab Navigation */}
              <div className="border-b border-[var(--color-secondary-300)]">
                <div className="flex gap-8">
                  <button
                    type="button"
                    onClick={() => setActiveTab("description")}
                    className={`pb-2 text-sm lg:text-base font-normal font-primary cursor-pointer uppercase -tracking-[0.04px] transition-colors relative ${
                      activeTab === "description"
                        ? "text-[var(--color-secondary-800)]"
                        : "text-[var(--color-secondary-500)] hover:text-[var(--color-secondary-700)]"
                    }`}
                  >
                    DESCRIPTION
                    {activeTab === "description" && (
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-primary-600)]" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("compatible-vehicles")}
                    className={`pb-2 text-sm lg:text-base font-normal font-primary cursor-pointer uppercase -tracking-[0.04px] transition-colors relative ${
                      activeTab === "compatible-vehicles"
                        ? "text-[var(--color-secondary-800)]"
                        : "text-[var(--color-secondary-500)] hover:text-[var(--color-secondary-700)]"
                    }`}
                  >
                    COMPATIBLE VEHICLES
                    {activeTab === "compatible-vehicles" && (
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-primary-600)]" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("details")}
                    className={`pb-2 text-sm lg:text-base font-normal font-primary cursor-pointer uppercase -tracking-[0.04px] transition-colors relative ${
                      activeTab === "details"
                        ? "text-[var(--color-secondary-800)]"
                        : "text-[var(--color-secondary-500)] hover:text-[var(--color-secondary-700)]"
                    }`}
                  >
                    DETAILS
                    {activeTab === "details" && (
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-primary-600)]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {activeTab === "description" && (
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[var(--color-secondary-800)] font-secondary uppercase -tracking-[0.06px] mb-4">
                      Description
                    </h3>
                    <div className="text-sm lg:text-base leading-relaxed">
                      {renderDescription()}
                    </div>
                  </div>
                )}

                {activeTab === "details" && hasAnyDimension && (
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[var(--color-secondary-800)] font-secondary uppercase -tracking-[0.06px] mb-4">
                      Product Dimensions
                    </h3>
                    <ul className="text-sm lg:text-lg -tracking-[0.045px] font-semibold font-secondary text-[var(--color-secondary-800)] list-disc marker:text-[var(--color-primary-600)] pl-5 space-y-3">
                      {lengthVal &&
                        lengthVal !== "0" &&
                        parseFloat(lengthVal) !== 0 && (
                          <li>
                            Length:{" "}
                            <span className="font-normal">
                              {lengthVal} Inches
                            </span>
                          </li>
                        )}
                      {widthVal &&
                        widthVal !== "0" &&
                        parseFloat(widthVal) !== 0 && (
                          <li>
                            Width:{" "}
                            <span className="font-normal">
                              {widthVal} Inches
                            </span>
                          </li>
                        )}
                      {heightVal &&
                        heightVal !== "0" &&
                        parseFloat(heightVal) !== 0 && (
                          <li>
                            Height:{" "}
                            <span className="font-normal">
                              {heightVal} Inches
                            </span>
                          </li>
                        )}
                      {selectedVariant?.weight?.value &&
                        selectedVariant.weight.value !== 0 && (
                          <li>
                            Weight:{" "}
                            <span className="font-normal">
                              {selectedVariant.weight.value}
                              {selectedVariant.weight.unit}
                            </span>
                          </li>
                        )}
                    </ul>
                  </div>
                )}

                {activeTab === "compatible-vehicles" && (
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[var(--color-secondary-800)] font-secondary uppercase -tracking-[0.06px] mb-4">
                      Compatible Vehicles
                    </h3>
                    <div>
                      {fitmentLoading ? (
                        <div className="space-y-2">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <div
                              key={index}
                              className="h-5 bg-gray-300 w-2/3 animate-pulse"
                            />
                          ))}
                        </div>
                      ) : fitmentError ? (
                        <div className="text-sm text-red-600 px-4 py-2">
                          {fitmentError}
                        </div>
                      ) : displayedFitments?.length > 0 ? (
                        <div>
                          <div className="space-y-2">
                            {displayedFitments.map((fitmentSet, index) => {
                              const entries = fitmentKeys
                                .map((key) => ({ key, value: fitmentSet[key] }))
                                .filter((entry) => entry.value);

                              return (
                                <p
                                  key={index}
                                  className="text-sm font-secondary text-[var(--color-secondary-800)]"
                                >
                                  <span className="font-primary uppercase text-xs">
                                    {entries
                                      .map((entry) => entry.key)
                                      .join(" ")}
                                    :
                                  </span>{" "}
                                  <span className="font-normal">
                                    {entries
                                      .map((entry) => entry.value)
                                      .join(" ")}
                                  </span>
                                </p>
                              );
                            })}
                          </div>

                          {!hasMoreFitments ? null : (
                            <CommonButton
                              onClick={() => setFitmentPage((prev) => prev + 1)}
                              className="mt-4 text-sm md:text-base underline hover:underline-offset-4 px-0 hover:text-[var(--color-primary)]"
                            >
                              View More
                            </CommonButton>
                          )}
                        </div>
                      ) : (
                        <p className="text-sm text-[var(--color-secondary-600)]">
                          No compatible vehicle information available.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Toast */}
        {toast && (
          <div
            className="fixed top-4 right-4 z-50 space-y-3 animate-[slidein_.25s_ease-out]"
            aria-live="polite"
          >
            <Toast
              message={toast.message}
              type={toast.type}
              subParagraph={toast.subParagraph}
              duration={2500}
              onClose={() => setToast(null)}
            />
            <style jsx>{`
              @keyframes slidein {
                from {
                  opacity: 0;
                  transform: translateY(-6px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        )}
      </div>
      <ItemInquiryModal
        isModalOpen={showInquiryModal}
        onClose={() => setShowInquiryModal(false)}
      />
    </>
  );
}
