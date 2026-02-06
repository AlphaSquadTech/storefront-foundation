import type { Metadata, Viewport } from "next";
import type { TenantStorefrontConfig } from "@alphasquad/storefront-config";

export type TenantMetadataOverrides = Partial<Metadata>;

function asObject(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }
  return value as Record<string, unknown>;
}

function trimTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

function combinePath(baseUrl: string, path?: string): string {
  if (!path) return "/";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = trimTrailingSlash(baseUrl);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export function buildBaseMetadata(config: TenantStorefrontConfig): Metadata {
  const siteUrl = trimTrailingSlash(config.integrations.siteUrl);
  const canonicalPath = config.head?.canonicalPath ?? "/";
  const canonicalUrl = combinePath(siteUrl, canonicalPath);
  const title = config.head?.title || config.branding.storeName;
  const description =
    config.head?.description ||
    "Discover featured products, best sellers, and exclusive offers.";
  const iconUrl = config.branding.appIconUrl || "/favicon.ico";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${config.branding.storeName}`,
    },
    description,
    authors: [{ name: config.branding.storeName }],
    creator: config.branding.storeName,
    publisher: config.branding.storeName,
    icons: {
      icon: [{ url: iconUrl }],
      shortcut: [{ url: iconUrl }],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      siteName: config.branding.storeName,
      title,
      description,
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: config.head?.robots?.index ?? true,
      follow: config.head?.robots?.follow ?? true,
    },
  };
}

export function applyMetadataOverrides(
  base: Metadata,
  overrides?: TenantMetadataOverrides,
): Metadata {
  if (!overrides) {
    return base;
  }

  return {
    ...base,
    ...overrides,
    alternates: {
      ...asObject(base.alternates),
      ...asObject(overrides.alternates),
    },
    icons: {
      ...asObject(base.icons),
      ...asObject(overrides.icons),
    },
    openGraph: {
      ...asObject(base.openGraph),
      ...asObject(overrides.openGraph),
    },
    twitter: {
      ...asObject(base.twitter),
      ...asObject(overrides.twitter),
    },
    robots: {
      ...asObject(base.robots),
      ...asObject(overrides.robots),
    },
  };
}

export function buildBaseViewport(
  themeColorLight = "#ffffff",
  themeColorDark = "#0a0a0a",
): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: themeColorLight },
      { media: "(prefers-color-scheme: dark)", color: themeColorDark },
    ],
  };
}
