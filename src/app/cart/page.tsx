import type { Metadata } from "next";
import { getStoreName } from "@/app/utils/branding";
import CartPage from "./CartPageClient";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: `Review items in your shopping cart at ${getStoreName()}. Proceed to checkout when ready.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function CartPageWrapper() {
  return <CartPage />;
}
