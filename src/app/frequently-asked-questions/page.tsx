import { Suspense } from "react";
import type { Metadata } from "next";
import AncillaryContent from "@/app/components/ancillary/AncillaryContent";
import ContentSkeleton from "@/app/components/skeletons/ContentSkeleton";
import { getStoreName } from "@/app/utils/branding";
import Heading from "../components/reuseableUI/heading";
import Breadcrumb from "../components/reuseableUI/breadcrumb";
import { fetchPageBySlug } from "@/graphql/queries/getPageBySlug";
import {
  generateFAQPageSchema,
  generateBreadcrumbSchema,
  extractFAQsFromEditorContent,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: `FAQ - ${getStoreName()}`,
  description: `Find answers to frequently asked questions about ordering, shipping, returns, and product compatibility at ${getStoreName()}.`,
  alternates: {
    canonical: "/frequently-asked-questions",
  },
};

export default async function FAQPage() {
  // Fetch FAQ content for schema generation
  const page = await fetchPageBySlug("frequently-asked-questions");
  const faqs = extractFAQsFromEditorContent(page?.content ?? null);

  // Generate structured data
  const faqSchema = faqs.length > 0 ? generateFAQPageSchema(faqs) : null;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/frequently-asked-questions" },
  ]);

  return (
    <main className="h-full w-full">
      {/* Schema.org structured data */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto max-w-[1276px]">
        <div className="flex flex-col items-start w-full px-4 md:px-6 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col items-start gap-5 mb-6 w-full">
            <Breadcrumb
              items={[
                { text: "Home", link: "/" },
                { text: "FAQS", link: "/frequently-asked-questions" },
              ]}
            />
            <Heading content="FAQS" />
          </div>

          <section className="w-full">
            <Suspense fallback={<ContentSkeleton />}>
              <AncillaryContent slug="frequently-asked-questions" />
            </Suspense>
          </section>
        </div>
      </div>
    </main>
  );
}
