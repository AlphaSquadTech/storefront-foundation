import type { Metadata } from "next";
import { CategoryAPIType } from "@/lib/api/shop";
import Heading from "../components/reuseableUI/heading";
import BrandsListingClient from "./components/brandsListingClient";
import { getStoreName } from "@/app/utils/branding";

export const metadata: Metadata = {
  title: "Brands",
  description: "Browse our selection of top brands. Find products from trusted manufacturers and premium brands.",
  alternates: {
    canonical: "/brands",
  },
};

async function fetchBrands(): Promise<CategoryAPIType[]> {
  try {
    const partsLogicUrl = process.env.NEXT_PUBLIC_PARTSLOGIC_URL || "";
    const url = `${partsLogicUrl}/api/brands?page=1&per_page=100`;

    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch brands: ${res.status}`);
    }

    const data = await res.json();
    return data.brands || [];
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
}

export default async function BrandsPage() {
  const brands = await fetchBrands();

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 lg:py-14 space-y-6">
      <Heading content="Brands" />

      <BrandsListingClient brands={brands} />
    </div>
  );
}
