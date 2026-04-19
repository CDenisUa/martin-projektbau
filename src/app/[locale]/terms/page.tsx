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
    title: `${copy.terms.title} | Martin Projekt Group`,
    description: copy.terms.description,
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = await getLegalCopy(locale);

  return (
    <LegalPageFrame
      eyebrow={copy.terms.eyebrow}
      title={copy.terms.title}
      description={copy.terms.description}
      lastUpdatedLabel={copy.terms.lastUpdatedLabel}
      lastUpdatedValue={copy.terms.lastUpdatedValue}
      sections={copy.terms.sections}
    />
  );
}
