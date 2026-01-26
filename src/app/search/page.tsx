import type { Metadata } from "next";
import { getStoreName } from "@/app/utils/branding";
import SearchPage from "./SearchPageClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Search Results",
  description: `Search for products at ${getStoreName()}. Find the best parts and accessories with our advanced search and vehicle fitment filters.`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPageWrapper() {
  return <SearchPage />;
}
