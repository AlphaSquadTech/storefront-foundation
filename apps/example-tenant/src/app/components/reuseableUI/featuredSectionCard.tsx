"use client";
import { getFullImageUrl } from "@/app/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EditorRenderer from "../richText/EditorRenderer";
import PrimaryButton from "./primaryButton";

export interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  href: string;
  category_id: string;
  description: string;
  sku: string;
}

export const FeaturedSectionCard = ({
  id,
  name,
  image,
  href,
  description,
  sku,
}: ProductCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const fallbackImage = "/no-image-avail-large.png";

  // Ensure image URL has full S3 path if it's relative
  const fullImageUrl = getFullImageUrl(image) || fallbackImage;

  return (
    <Link
      href={href}
      key={id}
      className="group block h-full overflow-hidden transition-all duration-200 relative font-secondary"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[87%] mx-auto">
        <div className="relative w-full overflow-hidden bg-white">
          {!loaded && (
            <div
              className="animate-pulse bg-[var(--color-secondary-200)] absolute inset-0 z-10"
              aria-hidden="true"
            />
          )}
          <Image
            src={fullImageUrl}
            alt={name}
            width={296}
            height={226}
            quality={85}
            sizes="100vw"
            className={`w-full max-w-xl mx-auto max-h-[300px] lg:max-w-none h-full object-contain bg-white transition-all ease-in-out duration-300 lg:group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setLoaded(true)}
            onError={() => setLoaded(true)}
            priority={false}
          />
        </div>
        <div className="w-full space-y-4 flex flex-col justify-between pb-1">
          <div>
            <p
              title={name}
              className="-tracking-[0.05px] font-medium text-sm md:text-lg line-clamp-2 text-white font-primary uppercase"
            >
              {name}
            </p>

            <p className="text-sm font-primary font-normal text-white italic mt-3">
              PART NUMBER:{" "}
              <span className="text-base font-secondary font-normal not-italic">
                SKU: {sku}
              </span>
            </p>
            <div className="max-h-[174px] overflow-hidden mt-3 !text-white [&>div>p]:!font-normal [&>div>p]:!text-base [&>div>p]:!line-clamp-5">
              <EditorRenderer content={description} />
            </div>
          </div>

          <PrimaryButton
            content="VIEW DETAILS"
            className="font-primary text-sm font-normal w-fit update-element-angle"
          />
        </div>
      </div>
    </Link>
  );
};
