import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-6 py-6">
      <header className="flex justify-end">
        <LanguageSwitcher />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-8 py-12 text-center">
        {/* Logo placeholder: replace with the real logo image later. */}
        <div
          role="img"
          aria-label={t("logoAlt")}
          className="flex size-24 items-center justify-center rounded-3xl bg-blush"
        >
          <span aria-hidden="true" className="font-heading text-5xl font-extrabold text-brand-red">
            L
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl">Landly</h1>

        <p className="max-w-md text-lg leading-relaxed text-ink sm:text-xl">
          {t("tagline")}
        </p>

        {/* Not connected yet: it will link to onboarding once that page exists. */}
        <Button type="button" size="lg" className="h-12 rounded-full px-8 text-base">
          {t("getStarted")}
        </Button>
      </main>
    </div>
  );
}
