import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { locale as getLocaleParam } from "next/root-params";
import { routing } from "./routing";

// Runs on the server for each page: picks the language and loads its messages.
export default getRequestConfig(async () => {
  // Reads [locale] from the URL, e.g. "fr" for /fr.
  const requested = await getLocaleParam();
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
