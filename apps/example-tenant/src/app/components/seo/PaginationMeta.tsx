/**
 * Server-side pagination meta tags.
 * Renders rel="prev" and rel="next" link tags for SEO.
 * Use this in server components. For client components, use PaginationHead.
 */
interface PaginationMetaProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  searchParams?: Record<string, string>;
}

export default function PaginationMeta({
  currentPage,
  totalPages,
  basePath,
  searchParams = {},
}: PaginationMetaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const buildPageUrl = (page: number): string => {
    const params = new URLSearchParams(searchParams);
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    const queryString = params.toString();
    return `${baseUrl}${basePath}${queryString ? `?${queryString}` : ""}`;
  };

  return (
    <>
      {currentPage > 1 && (
        <link rel="prev" href={buildPageUrl(currentPage - 1)} />
      )}
      {currentPage < totalPages && (
        <link rel="next" href={buildPageUrl(currentPage + 1)} />
      )}
    </>
  );
}
