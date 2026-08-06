import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api routes
     * - _next (static files, image optimization)
     * - files with an extension (favicon.ico, images, etc.)
     * - the app-router metadata routes handled at the root
     */
    "/((?!api|_next/static|_next/image|sitemap.xml|robots.txt|manifest.webmanifest|icon.png|apple-icon.png|images|.*\\..*).*)",
  ],
};
