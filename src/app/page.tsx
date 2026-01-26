import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/schema";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import EmailSectionServer from "./components/newsletterSection/emailSectionServer";
import NewslettersHomeModal from "./components/reuseableUI/newsletter/newslettersHomeModal";
import { SkeletonLoader } from "./components/reuseableUI/skeletonLoader";
import { AboutUsSection } from "./components/showroom/aboutUs";
import { BrandsSwiperServer } from "./components/showroom/brandsSwiperServer";
import { BundleProducts } from "./components/showroom/bundleProducts";
import { FeaturedProductSection } from "./components/showroom/featuredProductSection";
import { FeaturesStrip } from "./components/showroom/featuresStrip";
import PopularCategorySection from "./components/showroom/popularCategory";
import { ShowroomHeroCarousel } from "./components/showroom/showroomHeroCarousel";
import { TestimonialsGrid } from "./components/showroom/testimonialsGrid";
import { getStoreName } from "./utils/branding";

export const metadata: Metadata = {
  title: `Home - ${getStoreName()}`,
  description:
    "Discover our featured products, best sellers, and exclusive offers. Shop quality products with fast shipping and satisfaction guarantee.",
};
const Promotions = dynamic(
  () =>
    import("./components/showroom/promotion").then((mod) => ({
      default: mod.Promotions,
    })),
  {
    loading: () => (
      <div className="w-full h-[704px] bg-gray-200 animate-pulse" />
    ),
  },
);

const FeaturedStripLoadingState = () => {
  return (
    <div className="relative isolate bg-[#333333] px-4 2xl:px-6 overflow-hidden undefined">
      <div className="relative mx-auto max-w-[1380px] w-full py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:flex 2xl:flex-wrap gap-4 items-center justify-between">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="rounded-full size-10 bg-white animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 w-40 bg-white rounded animate-pulse" />
                <div className="h-4 w-52 bg-white rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedBrandsLoadingState = () => {
  return (
    <div
      className="py-12 px-4 md:px-6 md:py-16 lg:px-0"
      style={{ backgroundColor: "var(--color-secondary-920)" }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 items-center gap-8 lg:gap-4">
        <div className="flex flex-col items-center lg:items-start w-full gap-4 lg:gap-6 xl:max-w-[230px] mx-auto">
          <div className="w-full max-w-3xs bg-gray-200 animate-pulse rounded h-12" />
          <div className="w-full max-w-44 bg-gray-200 animate-pulse rounded h-9" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:col-span-4">
          <div className="bg-gray-200 rounded-lg p-6 animate-pulse h-[88px] lg:h-[112px]" />
          <div className="bg-gray-200 rounded-lg p-6 animate-pulse h-[88px] lg:h-[112px]" />
          <div className="bg-gray-200 rounded-lg p-6 animate-pulse h-[88px] hidden md:block md:lg:h-[112px]" />
          <div className="bg-gray-200 rounded-lg p-6 animate-pulse h-[88px] hidden lg:block md:lg:h-[112px]" />
          <div className="bg-gray-200 rounded-lg p-6 animate-pulse h-[88px] hidden lg:block md:lg:h-[112px]" />
        </div>
      </div>
    </div>
  );
};

const FeaturedProductsSection = () => {
  return (
    <div className=" py-12 px-4 md:px-6 md:py-16 lg:px-0 bg-[#333333]">
      <div className="lg:container lg:mx-auto space-y-10">
        <div className="w-full max-w-80 bg-gray-200  animate-pulse rounded h-10 mx-auto" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full max-w-xl lg:max-w-none mx-auto h-full min-h-[317px] lg:min-h-[360px] bg-zinc-300 animate-pulse" />
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-zinc-300 animate-pulse w-full max-w-xl h-7 rounded" />
              <div className="bg-zinc-300 animate-pulse w-full max-w-md h-6 rounded" />
              <div className="space-y-2 mt-10">
                <div className="bg-zinc-300 animate-pulse w-full h-4 rounded" />
                <div className="bg-zinc-300 animate-pulse w-full h-4 rounded" />
                <div className="bg-zinc-300 animate-pulse w-full h-4 rounded" />
                <div className="bg-zinc-300 animate-pulse w-full h-4 rounded" />
              </div>
            </div>
            <div className="bg-zinc-300 animate-pulse w-full max-w-40 h-9 rounded mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!.replace(/\/$/, "");
  const storeName = getStoreName();

  const organizationSchema = generateOrganizationSchema(
    storeName,
    baseUrl,
    "/logo.png",
    [],
  );

  const websiteSchema = generateWebsiteSchema(storeName, baseUrl, "/search");

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <Suspense fallback={<SkeletonLoader type="hero" />}>
        <ShowroomHeroCarousel />
      </Suspense>

      <Suspense fallback={<FeaturedStripLoadingState />}>
        <FeaturesStrip />
      </Suspense>

      <Promotions />

      <PopularCategorySection />

      <Suspense fallback={<FeaturedBrandsLoadingState />}>
        <BrandsSwiperServer />
      </Suspense>

      <Suspense fallback={<FeaturedProductsSection />}>
        <FeaturedProductSection collection="featured-products" count={4} />
      </Suspense>

      <Suspense
        fallback={
          <div className="container mx-auto m-24 flex flex-col gap-16">
            <div className="w-full flex justify-between items-center">
              <div className="w-full max-w-3xs bg-gray-200   animate-pulse rounded h-12" />
              <div className="rounded w-28 h-8 bg-gray-200 animate-pulse " />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <SkeletonLoader type="category" count={5} />
            </div>
          </div>
        }
      >
        <BundleProducts collection="bundle-2" />
      </Suspense>

      <Suspense
        fallback={
          <div
            className="py-24"
            style={{ backgroundColor: "var(--color-secondary-50)" }}
          >
            <div className="container mx-auto">
              <div className="w-full max-w-3xs bg-gray-200 animate-pulse rounded h-12 mb-16" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-gray-200 rounded-lg p-8 animate-pulse h-64"
                  >
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-24"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <TestimonialsGrid first={6} />
      </Suspense>

      <Suspense
        fallback={
          <div className="bg-zinc-300 animate-pulse w-full h-[310px] lg:h-[480px]" />
        }
      >
        <AboutUsSection />
      </Suspense>

      <Suspense>
        <EmailSectionServer />
      </Suspense>

      <NewslettersHomeModal />
    </>
  );
}
