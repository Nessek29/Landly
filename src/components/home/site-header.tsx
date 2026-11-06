import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Link } from "@/i18n/navigation";

// Top bar: logo and "Landly" wordmark on one side, language switcher on the other.
export function SiteHeader() {
  const t = useTranslations("Header");

  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
      <Link href="/" className="flex items-center gap-3 rounded-full">
        {/* alt="" because the wordmark next to it already says "Landly". */}
        <Image src="/landly-logo.svg" alt="" width={48} height={48} priority />
        <span className="font-heading text-2xl font-extrabold text-brand-red">
          {t("wordmark")}
        </span>
      </Link>
      <LanguageSwitcher />
    </header>
  );
}
