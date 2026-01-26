import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import AncillaryContent from "@/app/components/ancillary/AncillaryContent";
import ContentSkeleton from "@/app/components/skeletons/ContentSkeleton";
import { getStoreName } from "@/app/utils/branding";
import Heading from "../components/reuseableUI/heading";
import Breadcrumb from "../components/reuseableUI/breadcrumb";

export const metadata: Metadata = {
  title: `Privacy Policy - ${getStoreName()}`,
  description: `Read our privacy policy to understand how ${getStoreName()} collects, uses, and protects your personal information.`,
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const derivedTitle = "Privacy Policy";

  return (
    <main className="h-full w-full">
      <div className="container mx-auto max-w-[1276px]">
        <div className="flex flex-col items-start w-full px-4 md:px-6 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col items-start gap-5 mb-6 w-full">
            <Breadcrumb
              items={[
                { text: "Home", link: "/" },
                { text: "PRIVACY POLICY", link: "/privacy-policy" },
              ]}
            />
            <Heading content="Privacy Policy" />
          </div>

          <section className="w-full">
            <Suspense fallback={<ContentSkeleton />}>
              <AncillaryContent slug="privacy-policy" />
            </Suspense>
          </section>
        </div>
      </div>
    </main>
  );
}
