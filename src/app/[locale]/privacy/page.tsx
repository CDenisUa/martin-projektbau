import { getTranslations } from 'next-intl/server';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  const sections: [string, string][] = [
    [t('s1h'), t('s1p')],
    [t('s2h'), t('s2p')],
    [t('s3h'), t('s3p')],
    [t('s4h'), t('s4p')],
    [t('s5h'), t('s5p')],
    [t('s6h'), t('s6p')],
    [t('s7h'), t('s7p')],
    [t('s8h'), t('s8p')],
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            {t('sectionLabel')}
          </p>
          <h1 className="text-5xl font-light text-white tracking-tight">
            {t('heading')}
          </h1>
          <p className="text-white/30 text-xs mt-4">{t('lastUpdated')}: April 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 space-y-10">
        {sections.map(([title, body], i) => (
          <div key={i}>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              {title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
