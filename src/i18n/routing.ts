import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: [
    'en', 'de', 'fr', 'it', 'es', 'pt', 'nl', 'pl',
    'cs', 'sk', 'hu', 'ro', 'bg', 'hr', 'sl', 'sv',
    'da', 'fi', 'et', 'lv', 'lt', 'el', 'mt', 'ga',
  ],
  defaultLocale: 'en',
  localeDetection: true,
});
