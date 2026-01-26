export function getTenantName() {
  return process.env.NEXT_PUBLIC_TENANT_NAME || "default";
}

export function getStoreName() {
  const tenantName = getTenantName();
  return tenantName.charAt(0).toUpperCase() + tenantName.slice(1).replace(/-/g, ' ') + " Store";
}

export function getAssetsBaseUrl() {
  // e.g. https://zgnluljrtbddtwugakuf.supabase.co
  return process.env.NEXT_PUBLIC_ASSETS_BASE_URL || "";
}

function joinUrl(...parts: string[]) {
  return parts
    .filter(Boolean)
    .map((p, i) => (i === 0 ? p.replace(/\/$/, "") : p.replace(/^\/+|\/+$/g, "")))
    .join("/");
}

// Helpers to sanitize env inputs
function pickFirstUrlToken(input?: string) {
  if (!input) return undefined;
  const trimmed = input.trim();
  // If there are accidental extra tokens (e.g., ".../favicon.png favicon.png"), take the first token
  const firstToken = trimmed.split(/\s+/)[0];
  return firstToken.replace(/^\"|\"$/g, "");
}

function cleanPathToken(input?: string, fallback = "") {
  const v = (input ?? fallback).trim();
  return v.replace(/^\"|\"$/g, "");
}

/**
 * Truncates a page title to fit within SEO-recommended character limits.
 * Titles should be 50-60 characters for optimal display in SERPs.
 * @param title - The title content (before brand suffix)
 * @param maxLength - Maximum length for the title portion (default: 50)
 * @returns Truncated title with ellipsis if needed
 */
export function truncateTitle(title: string, maxLength = 50): string {
  if (title.length <= maxLength) return title;
  // Truncate at word boundary if possible
  const truncated = title.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > maxLength * 0.7) {
    return truncated.substring(0, lastSpace) + "...";
  }
  return truncated.trim() + "...";
}

/**
 * Creates a full page title with store name, ensuring it doesn't exceed recommended length.
 * @param title - The main title content
 * @param separator - Separator between title and store name (default: " | ")
 * @param maxTotal - Maximum total length (default: 60)
 * @returns Full title string optimized for SEO
 */
export function createSeoTitle(
  title: string,
  separator = " | ",
  maxTotal = 60
): string {
  const storeName = getStoreName();
  const suffix = separator + storeName;
  const maxTitleLength = maxTotal - suffix.length;

  if (maxTitleLength <= 0) {
    // Store name is too long, just return store name
    return storeName;
  }

  const truncatedTitle = truncateTitle(title, maxTitleLength);
  return truncatedTitle + suffix;
}

export function getAppIconUrl() {
  const explicit = pickFirstUrlToken(process.env.NEXT_PUBLIC_APP_ICON);
  if (explicit && /^https?:\/\//i.test(explicit)) return explicit;

  const base = getAssetsBaseUrl();
  const tenant = getTenantName();
  const file = cleanPathToken(process.env.NEXT_PUBLIC_APP_ICON_FILENAME, "favicon.ico");
  const dir = cleanPathToken(process.env.NEXT_PUBLIC_APP_ICON_DIR, ""); // optional subfolder
  if (!base) return explicit || "/icons/appIcon.png";
  const pathParts = file.includes("/") ? [file] : (dir ? [dir, file] : [file]);
  return joinUrl(
    base,
    "storage/v1/object/public/storefront-assets",
    tenant,
    ...pathParts
  );
}
