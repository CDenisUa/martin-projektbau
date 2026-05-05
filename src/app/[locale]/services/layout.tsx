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
  const t = await getTranslations({ locale, namespace: 'services' });

  return buildPageMetadata({
    locale,
    path: '/services',
    title: `${t('title')} | Martin Projekt Group GmbH`,
    description: t('subtitle'),
  });
}

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
