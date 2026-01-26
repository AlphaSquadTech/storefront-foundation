import type { Metadata } from "next";
import { getStoreName } from "@/app/utils/branding";
import LocatorPage from "./LocatorPageClient";

export const metadata: Metadata = {
  title: "Dealer Locator",
  description: `Find authorized ${getStoreName()} dealers near you. Use our dealer locator to find the nearest location for parts and service.`,
  alternates: {
    canonical: "/locator",
  },
};

export default function LocatorPageWrapper() {
  return <LocatorPage />;
}
