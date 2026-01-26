"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationHeadProps {
  currentPage: number;
  totalPages: number;
  /** Base path without page parameter, e.g., "/products/all" or "/search" */
  basePath?: string;
}

/**
 * Adds rel="prev" and rel="next" link tags to the document head
 * for SEO-friendly pagination signals.
 *
 * While Google has deprecated using these for indexing decisions,
 * they still help other search engines and provide semantic clarity.
 */
export default function PaginationHead({
  currentPage,
  totalPages,
  basePath,
}: PaginationHeadProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
    const path = basePath || pathname;

    // Build URL with existing search params but updated page
    const buildPageUrl = (page: number): string => {
      const params = new URLSearchParams(searchParams?.toString() || "");

      if (page === 1) {
        params.delete("page");
      } else {
        params.set("page", page.toString());
      }

      const queryString = params.toString();
      return `${baseUrl}${path}${queryString ? `?${queryString}` : ""}`;
    };

    // Remove existing pagination links
    const existingPrev = document.querySelector('link[rel="prev"]');
    const existingNext = document.querySelector('link[rel="next"]');
    existingPrev?.remove();
    existingNext?.remove();

    // Add prev link if not on first page
    if (currentPage > 1) {
      const prevLink = document.createElement("link");
      prevLink.rel = "prev";
      prevLink.href = buildPageUrl(currentPage - 1);
      document.head.appendChild(prevLink);
    }

    // Add next link if not on last page
    if (currentPage < totalPages) {
      const nextLink = document.createElement("link");
      nextLink.rel = "next";
      nextLink.href = buildPageUrl(currentPage + 1);
      document.head.appendChild(nextLink);
    }

    // Cleanup on unmount or when dependencies change
    return () => {
      const prevLink = document.querySelector('link[rel="prev"]');
      const nextLink = document.querySelector('link[rel="next"]');
      prevLink?.remove();
      nextLink?.remove();
    };
  }, [currentPage, totalPages, pathname, searchParams, basePath]);

  // This component doesn't render anything visible
  return null;
}
