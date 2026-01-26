import EditorRenderer from "@/app/components/richText/EditorRenderer";
import { fetchPageBySlug } from "@/graphql/queries/getPageBySlug";
import Link from "next/link";

export default async function AncillaryContent({ slug }: { slug: string }) {
  const page = await fetchPageBySlug(slug);
  return (
    <>
      <EditorRenderer content={page?.content ?? null} />
      <div className="w-full pt-8 border-t border-[var(--color-secondary-200)]">
        <Link
          href="/"
          className="text-[var(--color-primary-600)] hover:underline inline-flex items-center gap-2"
        >
          ← Back to home 
        </Link>
      </div>
    </>
  );
}
