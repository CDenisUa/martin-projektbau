import 'server-only';

import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getCookieNoticeCopy, getFooterLegalCopy } from '@/lib/legalClientCopy';
import { getLegalPageTranslations, type SectionTuple } from '@/lib/legalPageTranslations';
import { legalInfo } from '@/lib/legalInfo';

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalFact = {
  label: string;
  value: string;
};

type LegalPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdatedLabel?: string;
  lastUpdatedValue?: string;
  sections?: LegalSection[];
  facts?: LegalFact[];
  noteTitle?: string;
  noteParagraphs?: string[];
};

export type LegalCopy = {
  legalNotice: LegalPageCopy;
  privacy: LegalPageCopy;
  terms: LegalPageCopy;
  cookies: LegalPageCopy;
};

type PrivacyMessages = {
  pageTitle: string;
  sectionLabel: string;
  heading: string;
  lastUpdated: string;
  s1h: string;
  s1p: string;
  s2h: string;
  s2p: string;
  s3h: string;
  s3p: string;
  s4h: string;
  s4p: string;
  s5h: string;
  s5p: string;
  s6h: string;
  s6p: string;
  s7h: string;
  s7p: string;
  s8h: string;
  s8p: string;
  s9h: string;
  s9p: string;
  s10h: string;
  s10p: string;
  s11h: string;
  s11p: string;
  s12h: string;
  s12p: string;
  s13h: string;
  s13p: string;
};

type ImpressumMessages = {
  pageTitle: string;
  sectionLabel: string;
  heading: string;
  companyLabel: string;
  addressLabel: string;
  address: string;
  registerOfficeLabel?: string;
  registerLabel: string;
  register: string;
  uidLabel: string;
  uid: string;
  vatLabel?: string;
  emailLabel: string;
  phoneLabel: string;
  phone: string;
  responsibleLabel: string;
  responsible: string;
  disclaimer: string;
  disclaimerText: string;
};

type LegalMessages = {
  impressum: ImpressumMessages;
  privacy: PrivacyMessages;
};

const PRIVACY_SECTIONS = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13'] as const;
const COOKIE_NOTICE_STORAGE_KEY = 'martin-cookie-notice-dismissed-v1';

function resolveLocale(locale: string) {
  const normalizedLocale = locale.split('-')[0];
  return hasLocale(routing.locales, normalizedLocale) ? normalizedLocale : routing.defaultLocale;
}

async function loadMessages(locale: string): Promise<LegalMessages> {
  return (await import(`../../messages/${locale}.json`)).default as LegalMessages;
}

function formatLastUpdated(locale: string) {
  const date = new Date(`${legalInfo.lastUpdatedIso}T00:00:00`);
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(date);
}

function getValue(value: string | null | undefined, fallback: string) {
  return value && value.trim().length > 0 ? value : fallback;
}

function getAddressValue(fallback: string) {
  const address = [legalInfo.postalAddress, legalInfo.country].filter(Boolean).join(', ');
  return address || fallback;
}

function buildPrivacySections(messages: PrivacyMessages): LegalSection[] {
  return PRIVACY_SECTIONS.flatMap((sectionKey) => {
    const title = messages[`${sectionKey}h` as keyof PrivacyMessages] as string | undefined;
    const paragraph = messages[`${sectionKey}p` as keyof PrivacyMessages] as string | undefined;

    if (!title || !paragraph) return [];

    return {
      title: interpolateLegalText(title),
      paragraphs: [interpolateLegalText(paragraph)],
    };
  });
}

function interpolateLegalText(value: string) {
  return value
    .replaceAll('{{host}}', legalInfo.websiteHost)
    .replaceAll('{{country}}', legalInfo.country)
    .replaceAll('{{storageKey}}', COOKIE_NOTICE_STORAGE_KEY);
}

function buildLocalizedSections(sections: readonly SectionTuple[]): LegalSection[] {
  return sections.map(([title, paragraph]) => ({
    title,
    paragraphs: [interpolateLegalText(paragraph)],
  }));
}

function compactFacts(facts: Array<LegalFact | null>): LegalFact[] {
  return facts.filter((fact): fact is LegalFact => Boolean(fact));
}

function getLabel(value: string | undefined, fallback: string) {
  return value && value.trim().length > 0 ? value : fallback;
}

export async function getLegalCopy(locale: string): Promise<LegalCopy> {
  const resolvedLocale = resolveLocale(locale);
  const messages = await loadMessages(resolvedLocale);
  const footerCopy = getFooterLegalCopy(resolvedLocale);
  const cookieNotice = getCookieNoticeCopy(resolvedLocale);
  const legalPageTranslations = getLegalPageTranslations(resolvedLocale);
  const lastUpdatedValue = formatLastUpdated(resolvedLocale);
  const termsSections = buildLocalizedSections(legalPageTranslations.terms);
  const cookieSections = buildLocalizedSections(legalPageTranslations.cookies);

  return {
    legalNotice: {
      eyebrow: messages.impressum.sectionLabel,
      title: messages.impressum.heading,
      description: messages.impressum.disclaimerText,
      lastUpdatedLabel: messages.privacy.lastUpdated,
      lastUpdatedValue,
      facts: compactFacts([
        { label: messages.impressum.companyLabel, value: legalInfo.companyName },
        {
          label: messages.impressum.addressLabel,
          value: getAddressValue(messages.impressum.address),
        },
        legalInfo.commercialRegisterOffice
          ? {
              label: getLabel(messages.impressum.registerOfficeLabel, 'Handelsregisteramt'),
              value: legalInfo.commercialRegisterOffice,
            }
          : null,
        {
          label: messages.impressum.registerLabel,
          value: getValue(legalInfo.commercialRegister, messages.impressum.register),
        },
        {
          label: messages.impressum.uidLabel,
          value: getValue(legalInfo.uidNumber, messages.impressum.uid),
        },
        legalInfo.vatNumber
          ? {
              label: getLabel(messages.impressum.vatLabel, 'MWST/VAT ID'),
              value: legalInfo.vatNumber,
            }
          : null,
        { label: messages.impressum.emailLabel, value: legalInfo.contactEmail },
        legalInfo.phone
          ? {
              label: messages.impressum.phoneLabel,
              value: legalInfo.phone,
            }
          : null,
        {
          label: messages.impressum.responsibleLabel,
          value: getValue(legalInfo.responsiblePerson, messages.impressum.responsible),
        },
      ]),
      noteTitle: messages.impressum.disclaimer,
      noteParagraphs: [messages.impressum.disclaimerText],
    },
    privacy: {
      eyebrow: messages.privacy.sectionLabel,
      title: messages.privacy.heading,
      description: messages.privacy.s1p,
      lastUpdatedLabel: messages.privacy.lastUpdated,
      lastUpdatedValue,
      sections: buildPrivacySections(messages.privacy),
    },
    terms: {
      eyebrow: messages.privacy.sectionLabel,
      title: footerCopy.terms,
      description: termsSections[0]?.paragraphs[0] ?? '',
      lastUpdatedLabel: messages.privacy.lastUpdated,
      lastUpdatedValue,
      sections: termsSections,
    },
    cookies: {
      eyebrow: messages.privacy.sectionLabel,
      title: footerCopy.cookies,
      description: cookieNotice.body,
      lastUpdatedLabel: messages.privacy.lastUpdated,
      lastUpdatedValue,
      sections: cookieSections,
    },
  };
}
