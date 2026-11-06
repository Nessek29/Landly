import { defineRouting } from "next-intl/routing";

// The single source of truth for which languages Landly supports.
// To add Arabic later, add "ar" here and create messages/ar.json.
export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
});
