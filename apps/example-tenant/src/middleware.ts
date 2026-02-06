import {
  createStorefrontMiddleware,
} from "@alphasquad/storefront-base/runtime/middleware";

export const middleware = createStorefrontMiddleware();

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|manifest.webmanifest|sitemap.xml|robots.txt).*)",
  ],
};
