import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";
import { locales } from "./navigation";

const publicPages = ["/", "/tools", "/policy-cookies"];

const intMiddleware = createMiddleware({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "en",
});

export default async function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );

  const token = await getToken({ req });
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  const isAuthPage = [
    "/auth/login",
    "/es/auth/login",
    "/auth/register",
    "/es/auth/register",
    "/auth/recovery",
    "/es/auth/recovery",
  ].includes(req.nextUrl.pathname);

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token && (isPublicPage || isAuthPage)) {
    return intMiddleware(req);
  }

  if (!token && !isPublicPage) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return intMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
