import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { legalInfo } from '@/lib/legalInfo';

export const SITE_URL = 'https://www.martinprojektgroup.ch';
export const SITE_NAME = 'Martin Projekt Group';
export const COMPANY_NAME = 'Martin Projekt Group GmbH';

export const DEFAULT_OG_IMAGE = {
  url: '/images/banners/og-image.webp',
  width: 1734,
  height: 907,
  alt: COMPANY_NAME,
};

export const SEO_KEYWORDS = [
  'Bau Schweiz',
  'Renovationen Schweiz',
  'Fassadenbau',
  'Fenstermontage',
  'Innenausbau',
  'Bauunternehmen Schweiz',
  'Construction Switzerland',
  'Renovation Europe',
];

export const SITEMAP_ROUTES = [
  { path: '', changeFrequency: 'monthly', priority: 1 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/impressum', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
] as const;

type PageMetadataInput = {
  locale: string;
  path?: string;
  title: string;
  description: string;
  robots?: Metadata['robots'];
};

function localizedPath(locale: string, path = '') {
  return path ? `/${locale}${path}` : `/${locale}`;
}

export function absoluteUrl(path = '') {
  return `${SITE_URL}${path}`;
}

export function getCanonicalUrl(locale: string, path = '') {
  return absoluteUrl(localizedPath(locale, path));
}

export function getLanguageAlternates(path = '') {
  return {
    ...Object.fromEntries(
      routing.locales.map((locale) => [locale, getCanonicalUrl(locale, path)])
    ),
    'x-default': getCanonicalUrl(routing.defaultLocale, path),
  };
}

export function buildPageMetadata({
  locale,
  path = '',
  title,
  description,
  robots,
}: PageMetadataInput): Metadata {
  const canonical = getCanonicalUrl(locale, path);

  return {
    title,
    description,
    keywords: SEO_KEYWORDS,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
      type: 'website',
      locale,
      alternateLocale: routing.locales.filter((item) => item !== locale),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots,
  };
}

function compactObject<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== null && item !== undefined)
  ) as T;
}

export function buildLocalBusinessJsonLd(locale: string) {
  return compactObject({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: legalInfo.companyName,
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    email: legalInfo.contactEmail,
    telephone: legalInfo.phone,
    taxID: legalInfo.uidNumber,
    address: legalInfo.postalAddress
      ? {
          '@type': 'PostalAddress',
          streetAddress: legalInfo.postalAddress,
          addressCountry: legalInfo.country,
        }
      : null,
    areaServed: [
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'Continent', name: 'Europe' },
    ],
    priceRange: '$$',
    inLanguage: locale,
  });
}

export function serializeJsonLd(value: Record<string, unknown>) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
