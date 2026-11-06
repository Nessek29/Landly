import type { Metadata } from "next";
import { Noto_Sans, Nunito } from "next/font/google";
import { notFound } from "next/navigation";
import { locale as getLocaleParam } from "next/root-params";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

// Fonts are downloaded at build time and served from our own site.
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" });

// Pre-build one version of every page per language (/en and /fr).
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Translated <title> and description for the browser tab and search engines.
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return { title: t("title"), description: t("description") };
}

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await getLocaleParam();
  // Unknown language in the URL (e.g. /xx) shows a 404 page.
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} className={`${nunito.variable} ${notoSans.variable}`}>
      <body className="min-h-dvh">
        {/* Makes translations available to client components too. */}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
