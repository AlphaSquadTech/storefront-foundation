export interface BrandingConfig {
  tenantName: string;
  storeName: string;
  logoUrl?: string;
  appIconUrl?: string;
}

export interface ThemeConfig {
  palette: string;
}

export interface IntegrationsConfig {
  apiUrl: string;
  siteUrl: string;
  searchUrl?: string;
}

export interface TenantHeadConfig {
  title?: string;
  description?: string;
  canonicalPath?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
}

export interface TenantStorefrontConfig {
  branding: BrandingConfig;
  theme: ThemeConfig;
  integrations: IntegrationsConfig;
  head?: TenantHeadConfig;
}
