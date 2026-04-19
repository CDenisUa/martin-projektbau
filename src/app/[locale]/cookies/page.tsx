import type { Metadata } from 'next';
import LegalPageFrame from '@/components/legal/LegalPageFrame';
import { getLegalCopy } from '@/lib/legalContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = await getLegalCopy(locale);

  return {
    title: `${copy.cookies.title} | Martin Projekt Group`,
    description: copy.cookies.description,
  };
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
