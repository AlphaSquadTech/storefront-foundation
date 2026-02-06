"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Announces route changes to screen readers.
 * Uses aria-live="assertive" to ensure navigation is announced.
 */
export default function RouteAnnouncer() {
  const pathname = usePathname();
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    // Get page title or generate from pathname
    const getPageTitle = () => {
      // First try to get the document title
      if (typeof document !== "undefined" && document.title) {
        return document.title;
      }
      
      // Fallback: generate title from pathname
      if (pathname === "/") return "Home page";
      
      const pageName = pathname
        .split("/")
        .filter(Boolean)
        .pop()
        ?.replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      
      return pageName ? `${pageName} page` : "Page loaded";
    };

    // Small delay to ensure the page has updated
    const timer = setTimeout(() => {
      setAnnouncement(`Navigated to ${getPageTitle()}`);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      role="status"
      aria-live="assertive"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
}
