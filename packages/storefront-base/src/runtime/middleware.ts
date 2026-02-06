import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { fetchConfigurationDirect, isFeatureActive } from "./configuration-service";

type JwtPayload = { exp?: number };

export interface StorefrontMiddlewareOptions {
  authRoutes?: string[];
  protectedPrefixes?: string[];
  featureRoutes?: Record<string, string>;
  clearCookiesPath?: string;
  loginPath?: string;
}

export const defaultStorefrontMiddlewareMatcher = [
  "/((?!api|_next/static|_next/image|favicon.ico|images|manifest.webmanifest|sitemap.xml|robots.txt).*)",
];

export function createStorefrontMiddleware(options: StorefrontMiddlewareOptions = {}) {
  const authRoutes =
    options.authRoutes ||
    [
      "/account/login",
      "/account/register",
      "/account/forgot-password",
      "/account/reset-password",
    ];

  const protectedPrefixes = options.protectedPrefixes || ["/account", "/orders", "/settings"];

  const featureRoutes = options.featureRoutes || {
    "/locator": "dealer_locator",
  };

  const clearCookiesPath = options.clearCookiesPath || "/api/auth/clear-cookies";
  const loginPath = options.loginPath || "/account/login";

  return async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (pathname !== pathname.toLowerCase()) {
      const url = req.nextUrl.clone();
      url.pathname = pathname.toLowerCase();
      return NextResponse.redirect(url, 308);
    }

    const normalizedPath =
      pathname.endsWith("/") && pathname.length > 1
        ? pathname.slice(0, -1)
        : pathname;

    const featureName = featureRoutes[normalizedPath];
    if (featureName) {
      try {
        const configuration = await fetchConfigurationDirect();
        const isActive = isFeatureActive(configuration, featureName);

        if (!isActive) {
          const homeUrl = new URL("/", req.url);
          const response = NextResponse.redirect(homeUrl);

          const isProd = process.env.NODE_ENV === "production";
          if (!isProd) {
            response.headers.set(
              "x-middleware-redirect",
              `home:feature-disabled:${featureName}`,
            );
          }
          return response;
        }
      } catch (error) {
        console.error("Error checking feature configuration:", error);
      }
    }

    const tokenCookie = req.cookies.get("token");
    const refreshCookie = req.cookies.get("refreshToken");

    let isTokenValid = false;
    if (tokenCookie?.value) {
      try {
        const { exp } = jwtDecode<JwtPayload>(tokenCookie.value);
        isTokenValid = !!exp && exp * 1000 > Date.now();
      } catch {
        isTokenValid = false;
      }
    }

    const isLoggedIn = !!tokenCookie && isTokenValid;

    const isAuthRoute = authRoutes.some(
      (route) => normalizedPath === route || normalizedPath.startsWith(`${route}/`),
    );

    const isProtectedRoute =
      protectedPrefixes.some(
        (prefix) => normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`),
      ) && !isAuthRoute;

    const isProd = process.env.NODE_ENV === "production";
    const debugHeaders: Record<string, string> = {
      "x-pathname": normalizedPath,
      "x-has-token": tokenCookie ? "1" : "0",
      "x-has-refresh": refreshCookie ? "1" : "0",
      "x-is-logged-in": isLoggedIn ? "1" : "0",
      "x-is-auth-route": isAuthRoute ? "1" : "0",
      "x-is-protected-route": isProtectedRoute ? "1" : "0",
    };

    if (tokenCookie && !isTokenValid) {
      const loginUrl = new URL(clearCookiesPath, req.url);
      loginUrl.searchParams.set("redirect", loginPath);
      loginUrl.searchParams.set("reason", "token-expired");
      const response = NextResponse.redirect(loginUrl);
      if (!isProd) {
        response.headers.set("x-middleware-redirect", "login:token-expired");
        Object.entries(debugHeaders).forEach(([k, v]) => response.headers.set(k, v));
      }
      return response;
    }

    if (isLoggedIn && isAuthRoute) {
      const response = NextResponse.redirect(new URL("/", req.url));
      if (!isProd) {
        response.headers.set("x-middleware-redirect", "home:auth-while-logged-in");
        Object.entries(debugHeaders).forEach(([k, v]) => response.headers.set(k, v));
      }
      return response;
    }

    if (!isLoggedIn && isProtectedRoute) {
      const targetLoginUrl = new URL(loginPath, req.url);
      targetLoginUrl.searchParams.set("next", normalizedPath);
      const response = NextResponse.redirect(targetLoginUrl);
      if (!isProd) {
        response.headers.set(
          "x-middleware-redirect",
          "login:protected-while-logged-out",
        );
        Object.entries(debugHeaders).forEach(([k, v]) => response.headers.set(k, v));
      }
      return response;
    }

    const response = NextResponse.next();
    if (!isProd) {
      response.headers.set("x-middleware-hit", "1");
      Object.entries(debugHeaders).forEach(([k, v]) => response.headers.set(k, v));
    }
    return response;
  };
}
