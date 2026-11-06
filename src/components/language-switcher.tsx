"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

// Shows one link per language. Clicking a link keeps you on the same page
// but in the other language (e.g. /en -> /fr).
export function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const currentLocale = useLocale();
  const pathname = usePathname();

  return (
    <nav aria-label={t("label")}>
      <ul className="flex gap-2">
        {routing.locales.map((locale) => {
          const isCurrent = locale === currentLocale;
          return (
            <li key={locale}>
              <Link
                href={pathname}
                locale={locale}
                lang={locale}
                aria-current={isCurrent ? "true" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors",
                  isCurrent
                    ? "bg-blush text-ink"
                    : "text-brand-green-dark hover:bg-blush/60",
                )}
              >
                {t(locale)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
