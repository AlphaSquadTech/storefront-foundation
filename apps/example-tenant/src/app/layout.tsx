import Layout from "@/app/components/layout/rootLayout";
import {
  applyMetadataOverrides,
  buildBaseMetadata,
  buildBaseViewport,
} from "@alphasquad/storefront-base";
import { getBaseHeadLinks } from "@alphasquad/storefront-base/runtime/head-links";
import { ThemeProvider } from "@/app/components/theme/theme-provider";
import { Theme } from "@/app/utils/functions";
import ConditionalGoogleAnalytics from "./components/analytics/ConditionalGoogleAnalytics";
import ConditionalGTMNoscript from "./components/analytics/ConditionalGTMNoscript";
import type { Metadata, Viewport } from "next";
import { Archivo, Days_One } from "next/font/google";
import type React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AnalyticsScripts from "./components/analytics/AnalyticsScripts";
import { TokenExpirationHandler } from "./components/auth/TokenExpirationHandler";
import ApolloWrapper from "./components/providers/ApolloWrapper";
import GoogleTagManagerProvider from "./components/providers/GoogleTagManagerProvider";
import { ServerAppConfigurationProvider } from "./components/providers/ServerAppConfigurationProvider";
import { getClientSafeConfiguration } from "./utils/serverConfigurationService";
import RecaptchaProvider from "./components/providers/RecaptchaProvider";
import "./globals.css";
import GoogleAnalyticsProvider from "./components/providers/GoogleAnalyticsProvider";
import YMMStatusProvider from "./components/providers/YMMStatusProvider";
import RouteAnnouncer from "./components/RouteAnnouncer";
import { storefrontConfig } from "../../storefront.config";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const daysOne = Days_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-days-one",
});

const baseMetadata = buildBaseMetadata(storefrontConfig);

export const viewport: Viewport = buildBaseViewport();

export const metadata: Metadata = applyMetadataOverrides(baseMetadata, {
  description:
    "Your premier online destination for quality products with fast shipping and exceptional service",
  manifest: "/site.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    locale: "en_US",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: storefrontConfig.branding.storeName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: "/",
  },
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const envTheme = "base-template";

  // Fetch configuration on server side
  const configuration = await getClientSafeConfiguration();
  const headLinks = getBaseHeadLinks(process.env.NEXT_PUBLIC_API_URL);

  return (
    <html lang="en" className={`${archivo.variable} ${daysOne.variable}`}>
      <head>
        {headLinks.map((link) => (
          <link
            key={`${link.rel}:${link.href}`}
            rel={link.rel}
            href={link.href}
            as={link.as}
            type={link.type}
            crossOrigin={link.crossOrigin}
          />
        ))}
        {configuration?.google?.search_console_verification_content && (
          <meta
            name="google-site-verification"
            content={configuration.google.search_console_verification_content}
          />
        )}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ApolloWrapper>
          <ServerAppConfigurationProvider configuration={configuration}>
            <ConditionalGTMNoscript />
            <ThemeProvider defaultTheme={envTheme as Theme}>
              <RecaptchaProvider>
                <AnalyticsScripts />
                <GoogleAnalyticsProvider>
                  <GoogleTagManagerProvider>
                    <YMMStatusProvider />
                    <TokenExpirationHandler />
                    <RouteAnnouncer />
                    <Layout>{children}</Layout>
                  </GoogleTagManagerProvider>
                </GoogleAnalyticsProvider>
              </RecaptchaProvider>
            </ThemeProvider>
            <ConditionalGoogleAnalytics />
          </ServerAppConfigurationProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
