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
    title: `${copy.privacy.title} | Martin Projekt Group`,
    description: copy.privacy.description,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = await getLegalCopy(locale);

  return (
    <LegalPageFrame
      eyebrow={copy.privacy.eyebrow}
      title={copy.privacy.title}
      description={copy.privacy.description}
      lastUpdatedLabel={copy.privacy.lastUpdatedLabel}
      lastUpdatedValue={copy.privacy.lastUpdatedValue}
      sections={copy.privacy.sections}
    />
  );
}
