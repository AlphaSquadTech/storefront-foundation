/**
 * Normalizes menu URLs by converting absolute URLs from legacy/other domains
 * to relative paths for the current domain.
 * 
 * This handles cases where the CMS returns absolute URLs pointing to
 * different deployments or legacy domains.
 */
export const normalizeMenuUrl = (url: string): string => {
  if (!url) return url;
  
  try {
    // If it's an absolute URL (has a protocol), extract just the pathname
    if (url.startsWith("http://") || url.startsWith("https://")) {
      const urlObj = new URL(url);
      return urlObj.pathname + urlObj.search + urlObj.hash;
    }
    return url;
  } catch {
    // If URL parsing fails, return as-is
    return url;
  }
};
