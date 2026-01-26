import { FeatureTag } from "@/app/utils/svgs/featureTag";
import { getFullImageUrl } from "@/app/utils/functions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PrimaryButton from "./primaryButton";
import { ArrowIcon } from "@/app/utils/svgs/arrowIcon";

interface ListCardProps {
  id: string;
  name: string;
  image: string; // may be empty
  href: string;
  price: number;
  category_id: string;
  category: string;
  discount?: number | null;
  isFeatured?: boolean;
  onSale: boolean;
}

const ListCard = ({
  id,
  name,
  image,
  href,
  price,
  category,
  discount,
  isFeatured = false,
  onSale,
}: ListCardProps) => {
  const [loaded, setLoaded] = useState(false);

  const hasDiscount = discount != null && discount > 0;
  const priceValue = hasDiscount ? price + discount : price;

  const fallbackImage = "/no-image-avail-large.png";

  // Ensure image URL has full S3 path if it's relative
  const fullImageUrl = getFullImageUrl(image) || fallbackImage;

  return (
    <Link
      href={href}
      className="w-full flex items-center gap-4 bg-[var(--color-secondary-930)] border border-[var(--color-secondary-220)] pr-4"
    >
      <div className="relative w-full max-w-[124px]">
        {/* Featured badge */}
        {isFeatured && (
          <span
            style={{ color: "var(--color-primary-600)" }}
            className="absolute top-0 right-3 z-10 w-6 h-10"
          >
            {FeatureTag}
          </span>
        )}

        {/* On sale pill */}
        {onSale && (
          <PrimaryButton
            className="absolute !px-3 !py-2 top-2 right-2 z-10"
            content="Sales"
          />
        )}

        <div className="relative aspect-square  overflow-hidden">
          {/* Skeleton always shown until image finishes */}
          {!loaded && (
            <div className="animate-pulse bg-[var(--color-secondary-200)] absolute inset-0 z-10" />
          )}

          <Image
            src={fullImageUrl}
            alt={name}
            width={124}
            height={124}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        </div>
      </div>

      <div className="w-full my-4">
        <p
          style={{ color: "var(--color-secondary-75)" }}
          className="text-sm -tracking-[0.035px]"
        >
          {category}
        </p>
        <p
          title={name}
          style={{ color: "var(--color-secondary-75)" }}
          className="-tracking-[0.05px] font-medium text-xl line-clamp-1"
        >
          {name}
        </p>

        <div className="flex gap-2 text-2xl items-center mt-3">
          <p
            style={{ color: "var(--color-primary-700)" }}
            className="font-semibold -tracking-[0.06px]"
          >
            ${price.toFixed(2)}
          </p>
          {hasDiscount && (
            <p
              style={{ color: "var(--color-secondary-400)" }}
              className="font-semibold -tracking-[0.06px] line-through"
            >
              ${priceValue.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      <button
        style={{
          border: "1px solid var(--color-secondary-210)",
          backgroundColor: "var(--color-secondary-100)",
          color: "var(--color-secondary-90)",
        }}
        className="px-4 py-3 gap-2 font-secondary font-semibold cursor-pointer -tracking-[0.04px] flex-shrink-0 flex items-center justify-between"
      >
        VIEW DETAILS
        <span className="size-5">{ArrowIcon}</span>
      </button>
    </Link>
  );
};

export default ListCard;
