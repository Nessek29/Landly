import { CalendarCheck, Languages, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

const CARDS = [
  { key: "timeline", Icon: CalendarCheck },
  { key: "language", Icon: Languages },
  { key: "verified", Icon: ShieldCheck },
] as const;

// Three cards that explain why Landly is helpful.
export function WhyLandly() {
  const t = useTranslations("WhyLandly");

  return (
    <section aria-labelledby="why-title" className="relative mx-auto max-w-6xl px-6 py-6">
      <div aria-hidden="true" className="absolute top-1/3 -end-48 -z-10 size-96 rounded-full bg-blush/60 blur-3xl" />

      <div className="fade-up-on-scroll text-center">
        <h2 id="why-title" className="text-4xl sm:text-5xl">{t("title")}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink">{t("subtitle")}</p>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {CARDS.map(({ key, Icon }) => (
          <li key={key} className="fade-up-on-scroll rounded-3xl bg-card p-8 shadow-lg shadow-ink/5 ring-1 ring-border">
            <span className="flex size-14 items-center justify-center rounded-full bg-blush">
              <Icon aria-hidden="true" className="size-7 text-brand-green-dark" />
            </span>
            <h3 className="mt-6 text-2xl">{t(`cards.${key}.title`)}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{t(`cards.${key}.body`)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
