import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { PathwayLine } from "./pathway";

const STEPS = ["language", "situation", "plan", "action"] as const;

// Four numbered steps placed along a winding green line.
// Mobile: the line runs down the start side. Desktop: down the middle, steps alternate sides.
export function HowItWorks() {
  const t = useTranslations("HowItWorks");

  return (
    <section aria-labelledby="how-title" className="relative mx-auto max-w-5xl px-6 py-6">
      <div aria-hidden="true" className="absolute top-1/2 -start-48 -z-10 size-96 rounded-full bg-blush/60 blur-3xl" />

      <div className="fade-up-on-scroll text-center">
        <h2 id="how-title" className="text-4xl sm:text-5xl">{t("title")}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink">{t("subtitle")}</p>
      </div>

      <ol className="relative mt-14 space-y-10 md:space-y-6">
        <PathwayLine className="absolute inset-y-0 start-0 w-12 md:inset-x-0 md:mx-auto md:w-16" />

        {STEPS.map((key, i) => (
          <li
            key={key}
            className="fade-up-on-scroll relative grid grid-cols-[3rem_1fr] items-center gap-5 md:grid-cols-[1fr_4rem_1fr] md:gap-8"
          >
            {/* The number sits on the line. The cream ring makes the line look like it passes behind it. */}
            <span className="flex size-12 items-center justify-center rounded-full bg-brand-green-dark font-heading text-xl font-extrabold text-white ring-8 ring-cream md:col-start-2 md:row-start-1 md:mx-auto md:size-16 md:text-2xl">
              {i + 1}
            </span>
            <div
              className={cn(
                "rounded-3xl bg-card p-6 shadow-lg shadow-ink/5 ring-1 ring-border md:row-start-1 md:p-8",
                // On desktop, even steps go on the start side and odd steps on the end side.
                i % 2 === 0 ? "md:col-start-1 md:text-end" : "md:col-start-3",
              )}
            >
              <h3 className="text-2xl">{t(`steps.${key}.title`)}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{t(`steps.${key}.body`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
