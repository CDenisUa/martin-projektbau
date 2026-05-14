export const legalInfo = {
  companyName: 'Martin Projekt Group GmbH',
  websiteHost: 'martinprojektgroup.ch',
  websiteUrl: 'https://www.martinprojektgroup.ch',
  country: 'Schweiz',
  contactEmail: 'info@martinprojektgroup.ch',
  phone: null as string | null,
  postalAddress: 'Im Fennen 1, 8867 Niederurnen',
  commercialRegister: 'CHE-143.218.393',
  uidNumber: null as string | null,
  responsiblePerson: 'Martin Zborovancik',
  lastUpdatedIso: '2026-04-19',
};

export function isGermanLocale(locale: string) {
  return locale === 'de' || locale.startsWith('de-');
}
