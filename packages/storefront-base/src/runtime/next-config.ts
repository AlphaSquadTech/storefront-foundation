import type { NextConfig } from "next";

type RemotePatternList = Exclude<
  NonNullable<NextConfig["images"]>["remotePatterns"],
  undefined
>;

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
];

const defaultRemotePatterns: RemotePatternList = [
  { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
  { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
  { protocol: "https", hostname: "images.pexels.com", pathname: "/**" },
  { protocol: "https", hostname: "webshopmanager.com", pathname: "/**" },
  { protocol: "http", hostname: "localhost", port: "8000", pathname: "/media/**" },
  {
    protocol: "https",
    hostname: "wsmsaleormedia.s3.us-east-1.amazonaws.com",
    pathname: "/**",
  },
  { protocol: "https", hostname: "dummyimage.com", pathname: "/**" },
  { protocol: "https", hostname: "api-aeroexhaust.wsm-dev.com", pathname: "/**" },
  { protocol: "https", hostname: "wsm-saleor-assets.s3.us-west-2.amazonaws.com", pathname: "/**" },
  { protocol: "https", hostname: "zgnluljrtbddtwugakuf.supabase.co", pathname: "/**" },
  { protocol: "https", hostname: "aeroexhaust.com", pathname: "/**" },
  { protocol: "https", hostname: "encrypted-tbn0.gstatic.com", pathname: "/**" },
  { protocol: "https", hostname: "api-fuelmoto.wsm-dev.com", pathname: "/**" },
  { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/**" },
  { protocol: "https", hostname: "unpkg.com", pathname: "/**" },
  { protocol: "https", hostname: "raw.githubusercontent.com", pathname: "/**" },
  { protocol: "https", hostname: "via.placeholder.com", pathname: "/**" },
  { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
  { protocol: "https", hostname: "api-ideal-auto.wsm-dev.com", pathname: "/**" },
  { protocol: "https", hostname: "api-ez-oil-drain-valve.wsm-dev.com", pathname: "/**" },
  { protocol: "https", hostname: "api-red-horse-motorsports.wsm-dev.com", pathname: "/**" },
  {
    protocol: "https",
    hostname: "api-discount-door-window.wsm-dev.com",
    pathname: "/**",
  },
  { protocol: "https", hostname: "api-san-diego-office.wsm-dev.com", pathname: "/**" },
  { protocol: "https", hostname: "api-c-tile.wsm-dev.com", pathname: "/**" },
  { protocol: "https", hostname: "**" },
  { protocol: "http", hostname: "**" },
];

export interface BaseNextConfigOptions {
  additionalRemotePatterns?: RemotePatternList;
}

export function createBaseNextConfig(options: BaseNextConfigOptions = {}): NextConfig {
  return {
    async headers() {
      return [
        { source: "/:path*", headers: securityHeaders },
        {
          source: "/_next/static/:path*",
          headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
        },
        {
          source: "/images/:path*",
          headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
        },
        {
          source: "/:path*.ico",
          headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
        },
        {
          source: "/:path*.(png|jpg|jpeg|svg|webp|avif|gif)",
          headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
        },
        {
          source: "/:path*.(woff|woff2|ttf|otf|eot)",
          headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
        },
        {
          source: "/.well-known/apple-developer-merchantid-domain-association",
          headers: [
            { key: "Content-Type", value: "application/octet-stream" },
            { key: "Cache-Control", value: "public, max-age=3600" },
          ],
        },
      ];
    },
    async redirects() {
      return [
        { source: "/contact", destination: "/contact-us", permanent: true },
        { source: "/privacy", destination: "/privacy-policy", permanent: true },
        { source: "/terms", destination: "/terms-and-conditions", permanent: true },
        {
          source: "/products/product/:slug*",
          destination: "/product/:slug*",
          permanent: true,
        },
      ];
    },
    trailingSlash: false,
    images: {
      formats: ["image/avif", "image/webp"],
      remotePatterns: [
        ...defaultRemotePatterns,
        ...(options.additionalRemotePatterns || []),
      ],
    },
  };
}
