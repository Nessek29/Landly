import { Languages } from "lucide-react";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { WelcomeCard } from "./welcome-card";

const LANGUAGE_NAMES = ["en", "fr", "ar", "es"] as const;

// The first thing visitors see: headline, tagline, button and the preview card.
// Two columns on desktop; on mobile the card stacks below the text.
export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pt-8 pb-4 md:grid-cols-2 md:pt-16 lg:gap-20">
      {/* Soft blush background shapes. */}
      <div aria-hidden="true" className="absolute -top-24 -end-40 -z-10 size-[30rem] rounded-full bg-blush/70 blur-3xl" />
      <div aria-hidden="true" className="absolute top-1/2 -start-48 -z-10 size-80 rounded-full bg-blush/60 blur-3xl" />

      <div className="text-center md:text-start">
        <h1 className="fade-up text-5xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl">
          {t("title")}
        </h1>
        <p className="fade-up mx-auto mt-6 max-w-lg text-xl leading-relaxed text-ink [--delay:120ms] md:mx-0">
          {t("tagline")}
        </p>
        <div className="fade-up mt-10 [--delay:240ms]">
          <Button type="button" size="lg" className="h-14 rounded-full px-10 text-lg font-bold shadow-lg shadow-brand-green-dark/20">
            {t("getStarted")}
          </Button>
        </div>
        <p className="fade-up mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground [--delay:360ms] md:justify-start">
          <Languages aria-hidden="true" className="size-4 text-brand-green-dark" />
          {LANGUAGE_NAMES.map((lang, i) => (
            <Fragment key={lang}>
              {i > 0 && <span aria-hidden="true">·</span>}
              {/* lang and dir help screen readers and browsers display each name correctly. */}
              <span lang={lang} dir={lang === "ar" ? "rtl" : undefined}>
                {t(`languageNames.${lang}`)}
              </span>
            </Fragment>
          ))}
        </p>
      </div>

      <div className="fade-up [--delay:300ms]">
        <WelcomeCard />
      </div>
    </section>
  );
}
