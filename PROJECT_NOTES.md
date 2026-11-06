# Landly: Project Notes

Paste this file at the start of a new AI/coding session to give it context.

## What Landly is

A multilingual settlement guide for newcomers to Canada.
Tagline: "A gentler welcome to Canada. Your first 90 days, organized."

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui (Radix base, RTL mode on)
- Supabase (Postgres + Auth): not set up yet
- next-intl: English (`en`) and French (`fr`) now; Arabic (`ar`, right-to-left) later
- Deployed on Vercel

> Next.js 16 differs from older versions. Middleware is now `src/proxy.ts`,
> and `cacheComponents` is on. Check `node_modules/next/dist/docs/` when unsure.

## Design tokens

| Token              | Hex       | Tailwind class example     | Use for                         |
| ------------------ | --------- | -------------------------- | ------------------------------- |
| Cream              | `#FAF7F2` | `bg-cream`                 | Page background                 |
| Ink                | `#1F2430` | `text-ink`                 | Main text                       |
| Deep red           | `#A32A2A` | `text-brand-red`           | Headings and highlights         |
| Green              | `#1E9E6A` | `text-brand-green`         | Icons and progress bars only    |
| Dark green         | `#0F7A52` | `bg-brand-green-dark`      | Green text and buttons          |
| Blush              | `#F3DEDB` | `bg-blush`                 | Card tints                      |

- Headings font: Nunito (`font-heading`). Body font: Noto Sans (`font-sans`).
  Arabic will use Noto Sans Arabic.
- shadcn colours map to the tokens: `primary` = dark green, `secondary`/`accent`/`muted` = blush,
  `destructive` = deep red, `ring` (focus) = dark green.
- All tokens are defined in `src/app/globals.css`.

## Design rules

- Warm, calm, welcoming: rounded cards, generous spacing, short plain-language text.
- Use logical CSS properties (`ms`/`me`, `ps`/`pe`, `start`/`end`, `text-start`) instead of
  left/right (`ml`, `pr`, `left-0`, `text-left`) so right-to-left works later.
- Keep text contrast at WCAG AA or better. Do not use the light green `#1E9E6A` for text.
- Every interactive element must have a visible focus state (the global `:focus-visible` outline
  or the Button's focus ring).
- Click targets at least 44px tall (`min-h-11`).

## Working rules

- Work in small steps and give the exact commands to run.
- Don't add features that weren't asked for.
- Commit-ready code only (passes `npm run lint` and `npm run build`).
- Every user-facing string goes in `messages/en.json` **and** `messages/fr.json`, never hard-coded.

## File map

- `src/proxy.ts`: redirects `/` to `/en` or `/fr` based on browser language
- `src/i18n/routing.ts`: list of supported languages
- `src/i18n/request.ts`: loads the right messages file for each request
- `src/i18n/navigation.ts`: language-aware `Link`, `usePathname`, etc.
- `messages/*.json`: translated text
- `src/app/[locale]/layout.tsx`: root layout (fonts, `<html lang>`, translations provider)
- `src/app/[locale]/page.tsx`: home page
- `src/components/language-switcher.tsx`: English/Français switcher
- `src/components/ui/`: shadcn/ui components (add more with `npx shadcn@latest add <name>`)

## Adding Arabic later (checklist)

1. Add `"ar"` to `locales` in `src/i18n/routing.ts`.
2. Create `messages/ar.json` and add an `"ar": "العربية"` label to `LanguageSwitcher` in all message files.
3. In the layout, set `dir={locale === "ar" ? "rtl" : "ltr"}` on `<html>` and load `Noto_Sans_Arabic`.

## Status

- [x] Scaffold, theme, next-intl (en/fr), home page
- [ ] "Get started" button: not linked to anything yet (needs an onboarding page)
- [ ] Supabase
