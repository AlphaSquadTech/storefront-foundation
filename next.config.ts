import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure headers for security and Apple Pay
  async headers() {
    // Security headers applied to all routes
    const securityHeaders = [
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
      },
    ];

    return [
      // Apply security headers to all routes
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Next.js static assets - immutable, cache for 1 year
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Static images in public folder - cache for 1 year
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Favicon and icons - cache for 1 week
      {
        source: '/:path*.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800',
          },
        ],
      },
      // Static PNG/JPG/SVG/WebP images - cache for 1 year
      {
        source: '/:path*.(png|jpg|jpeg|svg|webp|avif|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Font files - cache for 1 year
      {
        source: '/:path*.(woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Apple Pay domain association file
      {
        source: '/.well-known/apple-developer-merchantid-domain-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/octet-stream',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ];
  },
  // SEO: Redirect duplicate content pages to canonical URLs
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      // Redirect duplicate product route to canonical product URL
      {
        source: '/products/product/:slug*',
        destination: '/product/:slug*',
        permanent: true,
      },
    ];
  },
  // SEO: Ensure consistent URL format without trailing slashes
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com", // 👈 add this back
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "webshopmanager.com",
        pathname: "/**",
      },
      {
        protocol: "http", // for local dev server
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "wsmsaleormedia.s3.us-east-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api-aeroexhaust.wsm-dev.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wsm-saleor-assets.s3.us-west-2.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "zgnluljrtbddtwugakuf.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aeroexhaust.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api-fuelmoto.wsm-dev.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unpkg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
                 {
        protocol: "https",
        hostname: "api-ideal-auto.wsm-dev.com",
        pathname: "/**",
      },
         {
        protocol: "https",
        hostname: "api-ez-oil-drain-valve.wsm-dev.com",
        pathname: "/**",
      },
           {
        protocol: "https",
        hostname: "api-red-horse-motorsports.wsm-dev.com",
        pathname: "/**",
      },
           {
        protocol: "https",
        hostname: "api-discount-door-window.wsm-dev.com",
        pathname: "/**",
      },
           {
        protocol: "https",
        hostname: "api-san-diego-office.wsm-dev.com",
        pathname: "/**",
      },
           {
        protocol: "https",
        hostname: "api-c-tile.wsm-dev.com",
        pathname: "/**",
      },
      // Accept all HTTPS domains (for multi-tenant support with 1000+ tenants)
      {
        protocol: "https",
        hostname: "**",
      },
      // Accept all HTTP domains (for local development)
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
