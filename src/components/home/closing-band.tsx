import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

// The final call to action: a deep red band with white text and a cream button.
// Contrast: white on red is 7.2:1, and red on cream is 6.7:1 (both pass WCAG AA).
export function ClosingBand() {
  const t = useTranslations("ClosingBand");

  return (
    <section aria-labelledby="closing-title" className="px-6 pb-16">
      <div className="fade-up-on-scroll relative isolate mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-brand-red px-8 py-16 text-center sm:px-16 sm:py-20">
        <div aria-hidden="true" className="absolute -top-20 -start-20 -z-10 size-64 rounded-full bg-white/10" />
        <div aria-hidden="true" className="absolute -bottom-24 -end-16 -z-10 size-72 rounded-full bg-white/10" />

        <h2 id="closing-title" className="text-4xl text-white sm:text-5xl">{t("title")}</h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white">{t("body")}</p>
        <Button
          type="button"
          size="lg"
          // The usual green focus ring would be hard to see on red, so it is cream here.
          className="mt-10 h-14 rounded-full bg-cream px-10 text-lg font-bold text-brand-red hover:bg-blush focus-visible:ring-cream focus-visible:ring-offset-brand-red"
        >
          {t("getStarted")}
        </Button>
      </div>
    </section>
  );
}
