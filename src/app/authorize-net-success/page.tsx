import { Suspense } from "react";
import type { Metadata } from "next";

import AuthorizeNetSummary from "./summary";
import LoadingUI from "../components/reuseableUI/loadingUI";

export const metadata: Metadata = {
  title: "Payment Successful",
  description: "Your payment has been processed successfully. View your order confirmation.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthorizeNetSuccessPage() {
  return (
    <Suspense fallback={<LoadingUI />}>
      <AuthorizeNetSummary />
    </Suspense>
  );
}