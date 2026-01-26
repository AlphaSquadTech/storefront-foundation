import {
  AboutUsResponse,
  GET_ABOUT_US_PAGE,
} from "@/graphql/queries/getAboutUs";
import createApolloServerClient from "@/graphql/server-client";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../reuseableUI/primaryButton";
import SecondaryButton from "../reuseableUI/secondaryButton";
import { EditorJsBlock } from "../richText/EditorRenderer";

function parseEditorJsSections(
  raw?: string | null
): { title: string; text: string }[] | [] {
  if (!raw) return [];
  try {
    const json = JSON.parse(raw) as { blocks?: EditorJsBlock[] };
    const blocks = Array.isArray(json?.blocks)
      ? (json.blocks as EditorJsBlock[])
      : [];
    const sections: { title: string; text: string }[] = [];
    let pendingTitle: string | null = null;
    for (const b of blocks) {
      if (b?.type === "header" && b?.data?.text) {
        pendingTitle = String(b.data.text).trim();
        continue;
      }
      if (b?.type === "paragraph") {
        const html = b?.data?.text || "";
        const trimmedHtml = html.trim();
        if (trimmedHtml) {
          // If we have a pending title, use it. Otherwise, use empty title
          sections.push({ title: pendingTitle || "", text: trimmedHtml });
          pendingTitle = null;
        }
      }
    }
    return sections;
  } catch {
    return [];
  }
}

export const AboutUsSection = async () => {
  // Fetch CMS content
  let sections: { title: string; text: string }[] = [];
  let subtitle: string = "";
  let imageUrl: string = "";
  let mainTitle: string = "";

  try {
    const client = createApolloServerClient();
    const resp = await client.query<AboutUsResponse>({
      query: GET_ABOUT_US_PAGE,
      variables: { first: 1 },
      fetchPolicy: "cache-first",
      errorPolicy: "all",
      context: {
        fetchOptions: {
          next: { revalidate: 600 }, // Cache for 10 minutes
        },
      },
    });

    const node = resp.data?.pages?.edges?.[0]?.node || null;
    if (node) {
      mainTitle = node.title || "";

      // Metadata (subtitle, optional future tokens)
      const meta: Record<string, string> = Object.fromEntries(
        (node.metadata || [])
          .filter((m): m is { key: string; value?: string | null } => !!m?.key)
          .map((m) => [m.key!, m.value || ""])
      );
      subtitle = meta["subtitle"] || "";
      imageUrl = meta["image-url"] || "";
      console.log(meta["image-url"], "meta");

      // Parse content blocks
      sections = parseEditorJsSections(node.content);
    }
  } catch {
    // fall back to defaults silently
  }

  // Determine if there is any content to show
  const hasContent =
    (Array.isArray(sections) &&
      sections.some((s) => s.title?.trim() || s.text?.trim())) ||
    Boolean(subtitle?.trim()) ||
    imageUrl ||
    Boolean(mainTitle?.trim());

  if (!hasContent) {
    return <div className="bg-zinc-300 animate-pulse w-full h-[310px] lg:h-[480px]" />;
  }

  return (
    <section aria-labelledby="about-us-heading" className="h-fit bg-black">
      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden h-fit">
        <div className="relative hidden lg:block">
          <div className="absolute w-full bg-gradient-to-r from-black h-full right-0 rotate-180" />
          <Image
            src={imageUrl}
            alt="About Us"
            width={800}
            height={400}
            loading="lazy"
            quality={55}
            sizes="100vw"
            className="w-full h-[480px] object-cover object-top"
          />
        </div>
        <div className="flex flex-col gap-4 px-4 py-14 lg:py-10 xl:py-4">
          {/* Main Title */}
          {mainTitle?.trim() && (
            <h2
              id="about-us-heading"
              className="font-primary uppercase tracking-[-0.06px] text-[var(--color-secondary-200)] text-lg md:text-xl lg:text-2xl leading-6 md:leading-7 lg:leading-8 text-center md:text-left"
            >
              {mainTitle}
            </h2>
          )}

          {/* Sections */}
          {sections.map((s, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 w-full text-center md:text-left"
            >
              {s.title?.trim() && (
                <h3 className="font-secondary font-primary font-bold uppercase tracking-[-0.06px] text-[var(--color-secondary-200)] text-base md:text-lg leading-5 md:leading-6">
                  {s.title}
                </h3>
              )}
              {s.text?.trim() && (
                <div
                  className="font-secondary -tracking-[0.045px] text-[var(--color-secondary-300)] text-sm md:text-base leading-5 md:leading-6 [&_a]:text-red-400 [&_a]:hover:text-red-600 [&_a]:transition-colors"
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
              )}
            </div>
          ))}

          <div className="pt-3 flex items-center gap-4 justify-center md:justify-start">
            <Link href="/products/all">
              <PrimaryButton
                content="SHOP NOW"
                className="font-primary text-sm font-normal update-element-angle"
              />
            </Link>
            <Link href={"/about"}>
              <SecondaryButton
                content="READ MORE ABOUT US"
                className="font-primary text-sm font-normal update-element-angle"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
