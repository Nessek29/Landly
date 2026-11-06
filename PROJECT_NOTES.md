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
| Green              | `#1E9E6A` | `bg-brand-green`           | Progress bars, pathway line     |
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
- On blush, light green is only 2.65:1, so icons in blush circles use dark green `#0F7A52` (4.15:1).
  Progress bars use a cream track (light green on cream is 3.19:1).
- On the deep red band: white text (7.2:1), cream button with red text (6.7:1), and a cream focus ring.
- Every interactive element must have a visible focus state (the global `:focus-visible` outline
  or the Button's focus ring).
- Click targets at least 44px tall (`min-h-11`).
- Style: rounded-3xl cards, soft shadows (`shadow-lg shadow-ink/5`), soft blurred blush shapes in the
  background, a green winding "pathway" (from the logo) linking sections.
- Animations: add `fade-up` (on load, delay with `[--delay:200ms]`) or `fade-up-on-scroll`.
  Both are defined in `globals.css` and switch off when the user prefers reduced motion.

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
- `src/app/[locale]/page.tsx`: home page; puts the sections below in order
- `src/components/language-switcher.tsx`: pill-style English/Français switcher
- `src/components/home/site-header.tsx`: logo + wordmark + language switcher
- `src/components/home/hero.tsx`: headline, tagline, Get started, language names, preview card
- `src/components/home/welcome-card.tsx`: mock "Welcome, Amira" plan card (example data)
- `src/components/home/pathway.tsx`: green winding line SVGs (`PathwayConnector`, `PathwayLine`)
- `src/components/home/why-landly.tsx`: three "Why Landly" cards
- `src/components/home/how-it-works.tsx`: four numbered steps along the pathway
- `src/components/home/closing-band.tsx`: deep red call-to-action band
- `public/landly-logo.svg`: the logo (red maple leaf, house, green path)
- `src/components/ui/`: shadcn/ui components (add more with `npx shadcn@latest add <name>`)

## Adding Arabic later (checklist)

1. Add `"ar"` to `locales` in `src/i18n/routing.ts`.
2. Create `messages/ar.json` and add an `"ar": "العربية"` label to `LanguageSwitcher` in all message files.
3. Mirror the pathway curves if they look odd (e.g. `rtl:-scale-x-100` on the SVGs).
4. In the layout, set `dir={locale === "ar" ? "rtl" : "ltr"}` on `<html>` and load `Noto_Sans_Arabic`.

## Status

- [x] Scaffold, theme, next-intl (en/fr), home page
- [x] Home page redesign (header, hero, pathway, Why Landly, How it works, closing band)
- [ ] Both "Get started" buttons: not linked to anything yet (need an onboarding page)
- [ ] Supabase
