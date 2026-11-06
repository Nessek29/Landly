import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Runs before every page request. If the URL has no language (e.g. "/"),
// it redirects to /en or /fr based on the browser's language settings.
export default createMiddleware(routing);

export const config = {
  // Skip API routes, Next.js internals, Vercel internals and files like favicon.ico.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
