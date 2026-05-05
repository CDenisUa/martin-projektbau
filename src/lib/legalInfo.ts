export const legalInfo = {
  companyName: 'Martin Projekt Group GmbH',
  websiteHost: 'martinprojektgroup.ch',
  websiteUrl: 'https://www.martinprojektgroup.ch',
  country: 'Switzerland',
  contactEmail: 'info@martinprojektgroup.ch',
  phone: null as string | null,
  postalAddress: null as string | null,
  commercialRegister: null as string | null,
  uidNumber: null as string | null,
  responsiblePerson: null as string | null,
  lastUpdatedIso: '2026-04-19',
};

export function isGermanLocale(locale: string) {
  return locale === 'de' || locale.startsWith('de-');
}
