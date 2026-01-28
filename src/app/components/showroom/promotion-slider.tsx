"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SwiperArrowIconLeft } from "@/app/utils/svgs/swiperArrowIconLeft";
import { SwiperArrowIconRight } from "@/app/utils/svgs/swiperArrowIconRight";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

type Promotion = {
  id: string;
  image: string;
  subHeading: string;
  headingLines: string[];
  description: string;
  listItems: string[];
  subtitleRedirect: string;
};

export const PromotionSlider = ({
  promotions,
}: {
  promotions: Promotion[];
}) => {
  const router = useRouter();
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ prevEl: ".promotion-prev", nextEl: ".promotion-next" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={promotions.length > 1}
        spaceBetween={0}
        slidesPerView={1}
        className="promotion-swiper pb-12 lg:pb-0
          [&_.swiper-pagination-bullet]:!bg-neutral-300
          [&_.swiper-pagination-bullet-active]:!bg-[var(--color-primary)]
          [&_.swiper-pagination]:!-bottom-2 lg:[&_.swiper-pagination]:!bottom-4"
      >
        {promotions &&
          promotions.map(
            ({
              id,
              image,
              subHeading,
              headingLines,
              description,
              listItems,
              subtitleRedirect,
            }) => (
              <SwiperSlide key={id} className="!h-auto">
                <div className="flex flex-col lg:flex-row items-center justify-start gap-8 lg:gap-16 h-full">
                  {/* Featured Image */}
                  {image !== " " && (
                    <Image
                      width={768}
                      height={576}
                      onClick={() => {
                        if (
                          subtitleRedirect &&
                          subtitleRedirect.trim().length > 0
                        ) {
                          router.push(subtitleRedirect);
                        }
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      src={image}
                      alt={headingLines?.join(" ") || "Promotion image"}
                      className="w-full lg:w-1/2 h-auto rounded-md bg-center bg-cover hover:scale-105 cursor-pointer transition-transform"
                      loading="lazy"
                      quality={75}
                      role="img"
                      aria-label={headingLines?.join(" ") || "Promotion image"}
                    />
                  )}

                  {/* Copy */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start justify-start">
                    {subHeading?.trim() ? (
                      <p className="font-secondary text-center w-full xl:text-left text-[18px] leading-[28px] tracking-[-0.045px] text-[var(--color-primary)]">
                        {subHeading}
                      </p>
                    ) : null}

                    <div className="font-primary text-neutral-800 tracking-[-0.12px] uppercase">
                      {headingLines.map((line, idx) => (
                        <h2
                          key={idx}
                          id={idx === 0 ? "promotion-heading" : undefined}
                          className="text-[36px] leading-[36px] text-center w-full xl:text-left sm:text-[44px] sm:leading-[44px] lg:text-[48px] lg:leading-[48px]"
                        >
                          {line}
                        </h2>
                      ))}
                    </div>

                    {description?.trim() ? (
                      <p className="font-secondary text-center w-full xl:text-left text-neutral-800 text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] tracking-[-0.045px] max-w-3xl">
                        {description}
                      </p>
                    ) : null}

                    {listItems && listItems.length > 0 ? (
                      <ol className="font-secondary text-neutral-800 text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] tracking-[-0.045px] max-w-3xl list-decimal list-inside space-y-2 w-full text-center xl:text-left">
                        {listItems.map((item, idx) => (
                          <li key={idx} className="pl-2">
                            {item}
                          </li>
                        ))}
                      </ol>
                    ) : null}
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
      </Swiper>

      {/* Prev Button */}
      <button
        style={{
          backgroundColor: "var(--color-secondary-200)",
          color: "var(--color-secondary-800)",
        }}
        className="p-2 rounded-full hidden md:block disabled:opacity-50 absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer promotion-prev z-10 hover:opacity-80 transition-opacity"
        aria-label="Previous slide"
      >
        <span className="size-6 block">{SwiperArrowIconLeft}</span>
      </button>

      {/* Next Button */}
      <button
        style={{
          backgroundColor: "var(--color-secondary-200)",
          color: "var(--color-secondary-800)",
        }}
        className="p-2 rounded-full hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 disabled:opacity-50 cursor-pointer promotion-next hover:opacity-80 transition-opacity"
        aria-label="Next slide"
      >
        <span className="size-6 flex-shrink-0 block">
          {SwiperArrowIconRight}
        </span>
      </button>
    </div>
  );
};
