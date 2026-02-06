export interface HeadLinkDescriptor {
  rel: string;
  href: string;
  as?: string;
  type?: string;
  crossOrigin?: "anonymous";
}

function getApiOrigin(apiUrl?: string): string | null {
  if (!apiUrl) return null;
  try {
    return new URL(apiUrl).origin;
  } catch {
    return null;
  }
}

export function getBaseHeadLinks(apiUrl?: string): HeadLinkDescriptor[] {
  const links: HeadLinkDescriptor[] = [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
    { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
    { rel: "dns-prefetch", href: "https://www.google.com" },
    {
      rel: "preconnect",
      href: "https://wsmsaleormedia.s3.us-east-1.amazonaws.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "preconnect",
      href: "https://wsm-saleor-assets.s3.us-west-2.amazonaws.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/heroSection-fallback.webp",
      type: "image/webp",
    },
  ];

  const apiOrigin = getApiOrigin(apiUrl);
  if (apiOrigin) {
    links.splice(5, 0, { rel: "preconnect", href: apiOrigin });
  }

  return links;
}
