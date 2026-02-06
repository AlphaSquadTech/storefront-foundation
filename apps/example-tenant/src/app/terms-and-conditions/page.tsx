import { Suspense } from "react";
import type { Metadata } from "next";
import AncillaryContent from "@/app/components/ancillary/AncillaryContent";
import ContentSkeleton from "@/app/components/skeletons/ContentSkeleton";
import { getStoreName } from "@/app/utils/branding";
import Breadcrumb from "../components/reuseableUI/breadcrumb";
import Heading from "../components/reuseableUI/heading";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Read our terms and conditions for purchasing products and using ${getStoreName()} services.`,
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {

  return (
    <main className="h-full w-full">
      <div className="container mx-auto max-w-[1276px]">
        <div className="flex flex-col items-start w-full px-4 md:px-6 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col items-start gap-5 mb-6 w-full">
            <Breadcrumb
              items={[
                { text: "Home", link: "/" },
                { text: "TERMS & CONDITIONS", link: "/terms-and-conditions" },
              ]}
            />
            <Heading content="Terms & Conditions" />
          </div>
          
          <section className="w-full">
            <Suspense fallback={<ContentSkeleton />}>
              <AncillaryContent slug="terms-and-conditions" />
            </Suspense>
          </section>
        </div>
      </div>
    </main>
  );
}
