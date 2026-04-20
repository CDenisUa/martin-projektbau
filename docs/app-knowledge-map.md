# App Knowledge Map

Last updated: 2026-04-19

## Purpose

This file is the working map for future changes in this repository. It should be updated whenever routes, data flow, legal content, validation rules, tooling commands, or deployment assumptions change.

## Stack Snapshot

- Framework: Next.js 16 App Router
- UI: React 19, Tailwind CSS 4, Framer Motion, Lucide
- i18n: `next-intl`
- Email flow: Resend via `src/app/api/contact/route.ts`
- Tests: Jest + Testing Library
- Quality gates: ESLint, TypeScript, Jest, production build

## Route Map

- `src/app/[locale]/page.tsx`: localized landing page
- `src/app/[locale]/services/page.tsx`: services page
- `src/app/[locale]/about/page.tsx`: about page
- `src/app/[locale]/contact/page.tsx`: contact page
- `src/app/[locale]/privacy/page.tsx`: privacy policy
- `src/app/[locale]/impressum/page.tsx`: legal notice
- `src/app/[locale]/terms/page.tsx`: terms of use
- `src/app/[locale]/cookies/page.tsx`: cookie policy
- `src/app/api/contact/route.ts`: contact form submission endpoint

## Core UI Composition

- `src/app/[locale]/layout.tsx`: locale shell, `NextIntlClientProvider`, shared header/footer, cookie notice
- `src/components/layout/Header.tsx`: nav, locale switch, mobile menu state
- `src/components/layout/Footer.tsx`: localized legal navigation, contact details, developer credit
- `src/components/legal/LegalPageFrame.tsx`: shared renderer for legal pages
- `src/components/legal/CookieNotice.tsx`: dismissible notice, stores dismissal in browser local storage
- `src/components/sections/ContactSection.tsx`: form UI, client validation, submit to `/api/contact`

## i18n Map

- `src/i18n/routing.ts`: supported locale list and default locale
- `src/i18n/request.ts`: loads locale message JSON from `messages/<locale>.json`
- `messages/*.json`: translation source of truth for landing pages, footer, impressum, privacy
- `src/lib/legalClientCopy.ts`: localized labels for footer legal links and cookie notice text
- `src/lib/legalPageTranslations.ts`: localized section copy for `terms` and `cookies` across all supported locales
- `src/lib/legalContent.ts`: server-side normalized copy for legal pages; combines `messages/*.json`, `legalClientCopy`, `legalPageTranslations`, and `legalInfo`

## Contact Flow

1. User fills `ContactSection`
2. Client validates with `src/lib/contactValidation.ts`
3. Form submits JSON to `src/app/api/contact/route.ts`
4. Route validates again and builds email via `src/lib/emailTemplate.ts`
5. Route sends mail through Resend
6. Client shows success or server error state

## Legal Content Flow

1. Footer and cookie notice link into legal routes
2. Legal routes call `getLegalCopy(locale)` from `src/lib/legalContent.ts`
3. `getLegalCopy` loads localized messages, applies localized `terms`/`cookies` sections from `src/lib/legalPageTranslations.ts`, and merges shared company data from `src/lib/legalInfo.ts`
4. `LegalPageFrame` renders facts or sections

## Verification Commands

- `npm run lint`
- `npm run typecheck`
- `npm test -- --runInBand`
- `npm run build`

## Known Operational Notes

- `node_modules/.bin/eslint` and `node_modules/.bin/tsc` are unreliable in this workspace. `package.json` scripts call package entrypoints directly instead.
- Under `Node v25.8.2`, Jest emits the runtime warning ``--localstorage-file was provided without a valid path`` even when all tests pass. Treat it as an environment/runtime warning first, not as an application regression.
- Legal page content now depends on both `messages/*.json` and `src/lib/legalInfo.ts`. If either changes, re-run build because missing legal keys break the localized routes fast.
- `CookieNotice` uses local storage key `martin-cookie-notice-dismissed-v1`.
- Privacy and impressum translations come from `messages/*.json`. Terms and cookies are fully localized in `src/lib/legalPageTranslations.ts`, and the test suite checks that every supported locale has a complete legal section set.

## Legal Snapshot

- Implemented legal routes: `privacy`, `impressum`, `terms`, `cookies`, all locale-aware and rendered through `src/lib/legalContent.ts`.
- Translation coverage for `terms` and `cookies` is enforced by `src/__tests__/lib/legalPageTranslations.test.ts`.
- Current legal company metadata in `src/lib/legalInfo.ts` is incomplete. `phone`, `postalAddress`, `commercialRegister`, `uidNumber`, and `responsiblePerson` are still `null`.
- Because of those `null` values, the legal notice currently falls back to placeholder `-` values from `messages/*.json` for address, register, UID, phone, and responsible person.
- Privacy text currently mentions `Resend` and `Vercel`, but it does not yet disclose destination countries or transfer safeguards for cross-border processing.
- Cookie disclosures currently match the visible implementation: language persistence plus local storage dismissal flag, with no analytics or marketing stack detected in the codebase.
- Contact flow currently collects `name`, `email`, optional `phone`, and `message`, and sends the data through `Resend` in `src/app/api/contact/route.ts`.
- The contact form links to the privacy page, but there is no explicit privacy consent checkbox or processor-specific disclosure at form-submit time.

## Maintenance Rule

Update this map whenever any of the following changes:

- a new route or API endpoint is added
- validation fields or email payload structure changes
- legal copy sources or company metadata changes
- localization loading or locale list changes
- build, lint, typecheck, or test commands change
- a recurring failure mode is discovered during debugging
