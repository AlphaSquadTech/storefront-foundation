import Image from "next/image";
import createApolloServerClient from "@/graphql/server-client";
import {
  GET_PAGE_METADATA_BY_SLUG,
  type PageMetadataResponse,
} from "@/graphql/queries/getHeroMetadata";

export const FeaturesStrip = async ({
  slug,
  className,
}: {
  slug?: string;
  className?: string;
}) => {
  // Fetch page metadata for features-strip
  let meta: Record<string, string> = {};
  try {
    const client = createApolloServerClient();
    const { data } = await client.query<PageMetadataResponse>({
      query: GET_PAGE_METADATA_BY_SLUG,
      variables: { slug: slug || "features-strip" },
      fetchPolicy: "network-only",
      errorPolicy: "ignore",
    });
    const items = data?.page?.metadata ?? [];
    meta = Object.fromEntries(items.map((m) => [m.key, m.value ?? ""]));
  } catch {
    // Silent fallback to defaults below
  }

  const extractIconSrc = (raw?: string | null): string => {
    const fallback = "/star.svg";
    if (!raw) return fallback;
    const val = raw.trim();
    // Strip leading 'background-image:' if present
    const withoutProp = val.replace(/^background-image\s*:\s*/i, "");
    const match = withoutProp.match(/url\(([^)]+)\)/i);
    if (match) {
      let url = match[1].trim();
      if (
        (url.startsWith('"') && url.endsWith('"')) ||
        (url.startsWith("'") && url.endsWith("'"))
      ) {
        url = url.slice(1, -1);
      }
      return url || fallback;
    }
    // If it's already a direct url/path/data uri
    if (
      val.startsWith("/") ||
      val.startsWith("http") ||
      val.startsWith("data:")
    )
      return val;
    return fallback;
  };

  const h1 = meta["feature_1_heading"] || "Original Products";
  const t1 =
    meta["feature_1_text"] || "Creative designs that elevate daily items.";
  const i1 = extractIconSrc(meta["feature_1_icon"]) || "/star.svg";
  const h2 = meta["feature_2_heading"] || "Affordable Rates";
  const t2 =
    meta["feature_2_text"] || "Explore affordable prices for everyone here!";
  const i2 = extractIconSrc(meta["feature_2_icon"]) || "/star.svg";
  const h3 = meta["feature_3_heading"] || "Wide variety";
  const t3 = meta["feature_3_text"] || "Explore a range of unique offerings.";
  const i3 = extractIconSrc(meta["feature_3_icon"]) || "/star.svg";
  const h4 = meta["feature_4_heading"] || "Wide variety";
  const t4 = meta["feature_4_text"] || "Explore a range of unique offerings.";
  const i4 = extractIconSrc(meta["feature_4_icon"]) || "/star.svg";

  return (
    <section
      className={`relative isolate bg-[#333333] px-4 2xl:px-6 overflow-hidden ${className}`}
      aria-label="Store features"
    >
      {/* Content */}
      <div className="relative mx-auto max-w-[1380px] w-full py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:flex 2xl:flex-wrap gap-4 items-center justify-between">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <Image
              src={i1}
              alt={`${h1} icon`}
              width={32}
              height={32}
              priority
              unoptimized={i1.startsWith("data:")}
            />
            <div className="leading-none">
              <p className="font-primary uppercase text-[var(--color-secondary-910)] text-base lg:text-xl/8 tracking-tight">
                {h1}
              </p>
              <p className="font-secondary text-[var(--color-secondary-910)] text-sm">
                {t1}
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <Image
              src={i2}
              alt={`${h2} icon`}
              width={32}
              height={32}
              unoptimized={i2.startsWith("data:")}
            />
            <div className="leading-none">
              <p className="font-primary uppercase text-[var(--color-secondary-910)] text-base lg:text-xl/8 tracking-tight">
                {h2}
              </p>
              <p className="font-secondary text-[var(--color-secondary-910)] text-sm">
                {t2}
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <Image
              src={i3}
              alt={`${h3} icon`}
              width={32}
              height={32}
              unoptimized={i3.startsWith("data:")}
              className="w-6 h-7"
            />
            <div className="leading-none">
              <p className="font-primary uppercase text-[var(--color-secondary-910)] text-base lg:text-xl/8 tracking-tight">
                {h3}
              </p>
              <p className="font-secondary text-[var(--color-secondary-910)] text-sm">
                {t3}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={i4}
              alt={`${h4} icon`}
              width={32}
              height={32}
              unoptimized={i4.startsWith("data:")}
            />
            <div className="leading-none">
              <p className="font-primary uppercase text-[var(--color-secondary-910)] text-base lg:text-xl/8 tracking-tight">
                {h4}
              </p>
              <p className="font-secondary text-[var(--color-secondary-910)] text-sm">
                {t4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
