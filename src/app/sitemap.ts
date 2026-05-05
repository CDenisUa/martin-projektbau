import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import {
  getCanonicalUrl,
  getLanguageAlternates,
  SITEMAP_ROUTES,
} from '@/lib/seo';
import { legalInfo } from '@/lib/legalInfo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${legalInfo.lastUpdatedIso}T00:00:00.000Z`);

  return SITEMAP_ROUTES.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: getCanonicalUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: getLanguageAlternates(route.path),
      },
    }))
  );
}
