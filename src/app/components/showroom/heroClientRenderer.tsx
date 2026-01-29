"use client";

import Image from "next/image";
import { SearchByVehicleHeroSection } from "../reuseableUI/searchByVehicleHeroSection";

type HeroClientProps = {
  title: string;
  description: string;
  bgSrc: string;
};

// Low-quality placeholder for LCP optimization (10x10 base64)
const HERO_BLUR_DATA_URL =
  "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoKAAYAAUAmJYgCdAEO/hOMAAD++P/mof/Ij/5kf8zP/lr/3k/+ZT/mV/5bf9tP+5n/mT/5aAA=";

const HeroBackground = ({ src, alt }: { src?: string | null; alt: string }) => {
  const imageSrc = src?.trim() || "/images/heroSection-fallback.webp";

  return (
    <div className="absolute inset-0">
      <Image
        src={imageSrc}
        alt={alt}
        width={1920}
        height={743}
        priority
        loading="eager"
        quality={70}
        sizes="100vw"
        fetchPriority="high"
        placeholder="blur"
        blurDataURL={HERO_BLUR_DATA_URL}
        className="w-full h-full object-cover object-center md:object-left"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60" />
    </div>
  );
};
const LeftContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="w-full lg:max-w-[1016px] text-center h-fit bg-[rgb(252 108 33 / 0.2)]">
    <div className="w-full">
      <h2 className="text-neutral-100 text-2xl lg:text-[40px] font-normal leading-none capitalize font-primary -tracking-[0.16px]">
        {title}
      </h2>
    </div>
    <div className="w-full pt-3 md:pt-4">
      <p className="font-secondary text-neutral-200 text-[18px] md:text-[20px] lg:text-[24px] tracking-[-0.06px] leading-[1.5] max-w-[960px] font-semibold">
        {description}
      </p>
    </div>
  </div>
);

export function HeroClientRenderer({
  title,
  description,
  bgSrc,
}: HeroClientProps) {
  return (
    <section className="relative w-full min-h-[559px] md:min-h-[506px]">
      <HeroBackground src={bgSrc} alt={title} />

      <div className="bg-[rgba(252,108,33,0.2)] relative w-full">
        <div className="container mx-auto relative flex items-center justify-center min-h-[559px] md:min-h-[506px]">
          <div className="w-full px-2 flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 ">
            <LeftContent title={title} description={description} />
            <SearchByVehicleHeroSection AddClearButton={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
