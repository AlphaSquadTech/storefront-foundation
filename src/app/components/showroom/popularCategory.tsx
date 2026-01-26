"use client";

import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../reuseableUI/primaryButton";

const categoriesDataJson = [
  {
    name: "LIGHTING",
    image:
      "http://wsm-saleor-assets.s3.us-west-2.amazonaws.com/sparktec-motorsports/categories/F220811245.png",
    href: "/products/all?q=light",
  },
  {
    name: "WHEEL",
    image:
      "https://wsm-saleor-assets.s3.us-west-2.amazonaws.com/sparktec-motorsports/categories/F220811247.png",
    href: "/products/all?q=wheels",
  },
  {
    name: "FLUID",
    image:
      "https://wsm-saleor-assets.s3.us-west-2.amazonaws.com/sparktec-motorsports/categories/F220811243.png",
    href: "/products/all?q=oil+lubricant",
  },
  {
    name: "INTAKE",
    image:
      "https://wsm-saleor-assets.s3.us-west-2.amazonaws.com/sparktec-motorsports/categories/F220811244.png",
    href: "/products/all?q=intake",
  },
  {
    name: "SUSPENSION",
    image:
      "https://wsm-saleor-assets.s3.us-west-2.amazonaws.com/sparktec-motorsports/categories/F220811246.png",
    href: "/products/all?q=suspension",
  },
  {
    name: "EXHAUST",
    image:
      "https://wsm-saleor-assets.s3.us-west-2.amazonaws.com/sparktec-motorsports/categories/F220811242.png",
    href: "/products/all?q=exhaust",
  },
];

const PopularCategorySection = () => {
  return (
    <div className="py-12 px-4 md:px-6 md:py-16 lg:py-24 lg:px-0 lg:container lg:mx-auto space-y-10">
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl uppercase font-primary -tracking-[0.12px] text-center italic">
          Popular Categories
        </h1>
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          <hr className="border-t-2 border-[#1ea0d2] w-full" />
          <Link href={"/search"}>
            <PrimaryButton
              content="View All Categories"
              className="whitespace-nowrap font-primary text-sm font-normal update-element-angle"
            />
          </Link>
          <hr className="border-t-2 border-[#1ea0d2] w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categoriesDataJson.map((category) => (
          <Link
            href={category.href}
            key={category.name}
            className="flex flex-col items-center space-y-4 bg-[#333333] py-4 group cursor-pointer"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={166}
              quality={85}
              sizes="100vw"
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-sm md:text-base lg:text-lg font-primary font-medium uppercase -tracking-[0.12px] text-center text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategorySection;
