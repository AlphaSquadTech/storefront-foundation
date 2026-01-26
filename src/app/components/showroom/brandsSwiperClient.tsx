"use client";

import { SwiperArrowIconLeft } from "@/app/utils/svgs/swiperArrowIconLeft";
import { SwiperArrowIconRight } from "@/app/utils/svgs/swiperArrowIconRight";
import { CategoryAPIType } from "@/lib/api/shop";
import Link from "next/link";
import {
  A11y,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BrandCard } from "../reuseableUI/brandCard";
import PrimaryButton from "../reuseableUI/primaryButton";

interface BrandSwiperProps {
  brands: CategoryAPIType[];
}

export const BrandsSwiperClient = ({ brands }: BrandSwiperProps) => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 items-center gap-8 lg:gap-4">
      <div className="flex flex-col items-center lg:items-start w-full gap-4 lg:gap-6 xl:max-w-[230px] mx-auto">
        <p className="text-2xl md:text-3xl xl:text-4xl uppercase font-primary -tracking-[0.12px] italic">
          Featured <br className="hidden lg:block" />
          <span className="text-[var(--color-primary)]">Brands</span>
        </p>
        <Link href={"/brands"}>
          <PrimaryButton
            content="View All Brands"
            className="whitespace-nowrap font-primary text-sm font-normal update-element-angle"
          />
        </Link>
      </div>
      <div className="relative flex items-center gap-3 lg:col-span-4">
        <button
          style={{
            backgroundColor: "var(--color-secondary-200)",
            color: "var(--color-secondary-800)",
          }}
          className="p-2 rounded-full disabled:opacity-50 cursor-pointer brands-prev"
        >
          <span className="size-6 block">{SwiperArrowIconLeft}</span>
        </button>

        <Swiper
          key={`swiper_brands`}
          threshold={6}
          spaceBetween={12}
          speed={800}
          autoplay={{ delay: 5000 }}
          slidesPerView={"auto"}
          modules={[
            Navigation,
            Scrollbar,
            A11y,
            Keyboard,
            Mousewheel,
            Pagination,
          ]}
          navigation={{ prevEl: ".brands-prev", nextEl: ".brands-next" }}
          mousewheel={{
            enabled: true,
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          className="w-full relative h-full"
        >
          {brands.map((brand, index) => (
            <SwiperSlide
              className="max-w-[246px]"
              key={`${brand.name}-${index}`}
            >
              <BrandCard
                name={brand.slug}
                imageUrl={brand.image || ""}
                url={brand.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          style={{
            backgroundColor: "var(--color-secondary-200)",
            color: "var(--color-secondary-800)",
          }}
          className="p-2 rounded-full disabled:opacity-50 cursor-pointer brands-next"
        >
          <span className="size-6 flex-shrink-0 block">
            {SwiperArrowIconRight}
          </span>
        </button>
      </div>
    </div>
  );
};
