import { Suspense } from "react";
import type { Metadata } from "next";

import Summary from "./summary";
import LoadingUI from "../components/reuseableUI/loadingUI";
import { getStoreName } from "@/app/utils/branding";

export const metadata: Metadata = {
  title: "Order Confirmation",
  description: "Thank you for your order. View your order confirmation details and next steps.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<LoadingUI />}>
      <Summary />
    </Suspense>
  );
}
