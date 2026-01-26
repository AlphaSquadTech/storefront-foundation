import { Suspense } from "react";
import Link from "next/link";
import AncillaryContent from "@/app/components/ancillary/AncillaryContent";
import ContentSkeleton from "@/app/components/skeletons/ContentSkeleton";
import Breadcrumb from "../components/reuseableUI/breadcrumb";
import Heading from "../components/reuseableUI/heading";

export default function ContactUsPage() {
  const derivedTitle = "Contact Us";

  return (
    <main className="h-full w-full">
      <div className="container mx-auto max-w-[1276px]">
        <div className="flex flex-col items-start w-full px-4 md:px-6 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col items-start gap-5 mb-6 w-full">
            <Breadcrumb
              items={[
                { text: "Home", link: "/" },
                { text: "CONTACT US", link: "/contact-us" },
              ]}
            />
            <Heading content="Contact Us" />
          </div>

          <section className="w-full">
            <Suspense fallback={<ContentSkeleton />}>
              <AncillaryContent slug="contact-us" />
            </Suspense>
          </section>
        </div>
      </div>
    </main>
  );
}
