import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'settings' });

  return buildPageMetadata({
    locale,
    path: '/settings',
    title: `${t('title')} | Martin Projekt Group GmbH`,
    description: t('subtitle'),
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  });
}

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return children;
}
