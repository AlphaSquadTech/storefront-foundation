import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { fetchConfigurationDirect, isFeatureActive } from '@/app/utils/configurationService';

type JwtPayload = { exp?: number };

const AUTH_ROUTES = [
  '/account/login',
  '/account/register',
  '/account/forgot-password',
  '/account/reset-password',
];

const PROTECTED_PREFIXES = ['/account', '/orders', '/settings'];

// Feature route mappings
const FEATURE_ROUTES = {
  '/locator': 'dealer_locator',
} as const;

// Configuration is now handled by the centralized service

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // SEO: Redirect uppercase URLs to lowercase for consistent indexing
  // This prevents duplicate content issues from case variations (e.g., /About vs /about)
  if (pathname !== pathname.toLowerCase()) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308); // Permanent redirect
  }

  const normalizedPath =
    pathname.endsWith('/') && pathname.length > 1
      ? pathname.slice(0, -1)
      : pathname;

  // Check feature route protection first
  const featureName = FEATURE_ROUTES[normalizedPath as keyof typeof FEATURE_ROUTES];
  if (featureName) {
    try {
      const configuration = await fetchConfigurationDirect();
      const isActive = isFeatureActive(configuration, featureName);
      
      if (!isActive) {
        // Redirect to home page if feature is not active
        const homeUrl = new URL('/', req.url);
        const response = NextResponse.redirect(homeUrl);
        
        const isProd = process.env.NODE_ENV === 'production';
        if (!isProd) {
          response.headers.set('x-middleware-redirect', `home:feature-disabled:${featureName}`);
        }
        return response;
      }
    } catch (error) {
      console.error('Error checking feature configuration:', error);
      // Allow access if there's an error (fail open)
    }
  }

  const tokenCookie = req.cookies.get('token');
  const refreshCookie = req.cookies.get('refreshToken');
  
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

  const isAuthRoute = AUTH_ROUTES.some(
    route => normalizedPath === route || normalizedPath.startsWith(route + '/')
  );

  const isProtectedRoute =
    PROTECTED_PREFIXES.some(
      prefix => normalizedPath === prefix || normalizedPath.startsWith(prefix + '/')
    ) && !isAuthRoute;

  // Debug headers only in non-prod and NEVER include token value
  const isProd = process.env.NODE_ENV === 'production';
  const debugHeaders: Record<string, string> = {
    'x-pathname': normalizedPath,
    'x-has-token': tokenCookie ? '1' : '0',
    'x-has-refresh': refreshCookie ? '1' : '0',
    'x-is-logged-in': isLoggedIn ? '1' : '0',
    'x-is-auth-route': isAuthRoute ? '1' : '0',
    'x-is-protected-route': isProtectedRoute ? '1' : '0',
  };

  // If token exists but is expired, redirect to clear-cookies API which will then redirect to login
  if (tokenCookie && !isTokenValid) {
    const loginUrl = new URL('/api/auth/clear-cookies', req.url);
    loginUrl.searchParams.set('redirect', '/account/login');
    loginUrl.searchParams.set('reason', 'token-expired');
    const response = NextResponse.redirect(loginUrl);
    if (!isProd) {
      response.headers.set('x-middleware-redirect', 'login:token-expired');
      Object.entries(debugHeaders).forEach(([k, v]) => response.headers.set(k, v));
    }
    return response;
  }

  if (isLoggedIn && isAuthRoute) {
    const res = NextResponse.redirect(new URL('/', req.url));
    if (!isProd) {
      res.headers.set('x-middleware-redirect', 'home:auth-while-logged-in');
      Object.entries(debugHeaders).forEach(([k, v]) => res.headers.set(k, v));
    }
    return res;
  }

  if (!isLoggedIn && isProtectedRoute) {
    const loginUrl = new URL('/account/login', req.url);
    loginUrl.searchParams.set('next', normalizedPath);
    const res = NextResponse.redirect(loginUrl);
    if (!isProd) {
      res.headers.set('x-middleware-redirect', 'login:protected-while-logged-out');
      Object.entries(debugHeaders).forEach(([k, v]) => res.headers.set(k, v));
    }
    return res;
  }

  const res = NextResponse.next();
  if (!isProd) {
    res.headers.set('x-middleware-hit', '1');
    Object.entries(debugHeaders).forEach(([k, v]) => res.headers.set(k, v));
  }
  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|manifest.webmanifest|sitemap.xml|robots.txt).*)',
  ],
};
