export const legalInfo = {
  companyName: 'Martin Projekt Group GmbH',
  websiteHost: 'martinprojektgroup.ch',
  websiteUrl: 'https://www.martinprojektgroup.ch',
  country: 'Schweiz',
  contactEmail: 'info@martinprojektgroup.ch',
  privacyEmail: 'info@martinprojektgroup.ch',
  phone: null as string | null,
  postalAddress: 'Im Fennen 1, 8867 Niederurnen',
  commercialRegisterOffice: 'Handelsregisteramt des Kantons Glarus',
  commercialRegister: 'CH-160.4.007.826-1',
  uidNumber: 'CHE-143.218.393',
  vatNumber: 'CHE-143.218.393 MWST',
  responsiblePerson: 'Martin Zborovancik',
  dataProtectionOfficer: null as string | null,
  euRepresentative: null as string | null,
  lastUpdatedIso: '2026-05-14',
};

export function isGermanLocale(locale: string) {
  return locale === 'de' || locale.startsWith('de-');
}
