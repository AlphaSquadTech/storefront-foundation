import type { TenantStorefrontConfig } from "@alphasquad/storefront-config";

function getTenantName() {
  return process.env.NEXT_PUBLIC_TENANT_NAME || "default";
}

function getStoreName() {
  const tenantName = getTenantName();
  return (
    tenantName.charAt(0).toUpperCase() +
    tenantName.slice(1).replace(/-/g, " ") +
    " Store"
  );
}

export const storefrontConfig: TenantStorefrontConfig = {
  branding: {
    tenantName: getTenantName(),
    storeName: getStoreName(),
    appIconUrl: "/favicon.ico",
  },
  theme: {
    palette: process.env.NEXT_PUBLIC_THEME_PALETTE || "base-template",
  },
  integrations: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    searchUrl: process.env.NEXT_PUBLIC_SEARCH_URL,
  },
  head: {
    canonicalPath: "/",
  },
};
