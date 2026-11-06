import { Circle, CircleCheck } from "lucide-react";
import { useTranslations } from "next-intl";

// Example data for the preview card. It is a picture of the idea, not real user data.
const PROGRESS = 35;
const TASKS = [
  { key: "sin", done: true },
  { key: "healthCard", done: false },
  { key: "settlementHub", done: false },
] as const;

// A mock "Welcome, Amira" card that shows what a personal plan could look like.
export function WelcomeCard() {
  const t = useTranslations("WelcomeCard");

  return (
    <figure aria-label={t("label")} className="relative mx-auto w-full max-w-md">
      {/* Soft blush shape peeking out behind the card. */}
      <div aria-hidden="true" className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-blush/80" />

      <div className="relative rounded-3xl bg-card p-6 shadow-xl shadow-ink/10 ring-1 ring-border sm:p-8">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex size-12 items-center justify-center rounded-full bg-blush font-heading text-xl font-extrabold text-brand-red"
          >
            A
          </span>
          <div>
            <p className="font-heading text-2xl font-bold text-ink">
              {t("greeting", { name: "Amira" })}
            </p>
            <p className="text-sm text-muted-foreground">{t("day", { day: 12, total: 90 })}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span id="welcome-progress">{t("progressLabel")}</span>
            <span className="text-brand-green-dark">{t("percent", { percent: PROGRESS })}</span>
          </div>
          <div
            role="progressbar"
            aria-labelledby="welcome-progress"
            aria-valuenow={PROGRESS}
            aria-valuemin={0}
            aria-valuemax={100}
            className="mt-2 h-3 overflow-hidden rounded-full bg-cream"
          >
            <div className="h-full rounded-full bg-brand-green" style={{ width: `${PROGRESS}%` }} />
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {TASKS.map((task) => (
            <li key={task.key} className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3">
              {task.done ? (
                <CircleCheck aria-hidden="true" className="size-6 shrink-0 text-brand-green-dark" />
              ) : (
                <Circle aria-hidden="true" className="size-6 shrink-0 text-muted-foreground" />
              )}
              <span className={task.done ? "text-muted-foreground line-through" : "text-ink"}>
                {t(`tasks.${task.key}`)}
              </span>
              <span className="sr-only">({task.done ? t("done") : t("toDo")})</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
