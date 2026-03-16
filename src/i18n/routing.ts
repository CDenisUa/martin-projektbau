import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: [
    'de', 'en', 'sk', 'cs', 'uk', 'pl', 'ru',
    'fr', 'it', 'es', 'pt', 'nl', 'hu', 'ro', 'bg',
    'hr', 'sl', 'sv', 'da', 'fi', 'et', 'lv', 'lt', 'el', 'mt', 'ga',
  ],
  defaultLocale: 'de',
  localeDetection: true,
});
