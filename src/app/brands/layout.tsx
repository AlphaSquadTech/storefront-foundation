import { getStoreName } from "@/app/utils/branding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Brands - ${getStoreName()}`,
  description: `Explore the wide range of automotive brands available at ${getStoreName()}. Find parts and accessories from top manufacturers to enhance your vehicle's performance and style.`,
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
