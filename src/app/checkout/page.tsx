import type { Metadata } from "next";
import { getStoreName } from "@/app/utils/branding";
import CheckoutPage from "./CheckoutPageClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: `Complete your purchase at ${getStoreName()}. Secure checkout with multiple payment options.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutPageWrapper() {
  return <CheckoutPage />;
}
