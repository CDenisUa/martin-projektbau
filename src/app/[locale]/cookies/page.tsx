import type { Metadata } from 'next';
import LegalPageFrame from '@/components/legal/LegalPageFrame';
import { getLegalCopy } from '@/lib/legalContent';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = await getLegalCopy(locale);

  return buildPageMetadata({
    locale,
    path: '/cookies',
    title: `${copy.cookies.title} | Martin Projekt Group GmbH`,
    description: copy.cookies.description,
  });
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = await getLegalCopy(locale);

  return (
    <LegalPageFrame
      eyebrow={copy.cookies.eyebrow}
      title={copy.cookies.title}
      description={copy.cookies.description}
      lastUpdatedLabel={copy.cookies.lastUpdatedLabel}
      lastUpdatedValue={copy.cookies.lastUpdatedValue}
      sections={copy.cookies.sections}
    />
  );
}
