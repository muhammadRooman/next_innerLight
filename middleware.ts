import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
});

export const config = {
  // matcher: ["/", "/(ar|en)/:path*"],
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)", // Ignore static files
    "/(ar|en)/:path*", // Locale-based routing
  ],
};
