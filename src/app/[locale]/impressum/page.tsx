import { getTranslations } from 'next-intl/server';

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'impressum' });

  const rows = [
    { label: t('companyLabel'), value: 'Martin Projekt Group GmbH' },
    { label: t('addressLabel'), value: t('address') },
    { label: t('registerLabel'), value: t('register') },
    { label: t('uidLabel'), value: t('uid') },
    { label: t('emailLabel'), value: 'info@martinprojektgroup.ch' },
    { label: t('phoneLabel'), value: t('phone') },
    { label: t('responsibleLabel'), value: t('responsible') },
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
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <table className="w-full text-sm mb-12">
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-gray-100">
                <td className="py-3 pr-8 text-gray-400 w-52 align-top">{row.label}</td>
                <td className="py-3 text-gray-900">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          {t('disclaimer')}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">{t('disclaimerText')}</p>
      </div>
    </div>
  );
}
