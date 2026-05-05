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
    path: '/impressum',
    title: `${copy.legalNotice.title} | Martin Projekt Group GmbH`,
    description: copy.legalNotice.description,
  });
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = await getLegalCopy(locale);

  return (
    <LegalPageFrame
      eyebrow={copy.legalNotice.eyebrow}
      title={copy.legalNotice.title}
      description={copy.legalNotice.description}
      facts={copy.legalNotice.facts}
      noteTitle={copy.legalNotice.noteTitle}
      noteParagraphs={copy.legalNotice.noteParagraphs}
    />
  );
}
