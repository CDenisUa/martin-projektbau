import fs from 'node:fs';
import path from 'node:path';
import { legalPageTranslations, type LegalLocale } from '@/lib/legalPageTranslations';

function getLocalesFromRoutingSource(): LegalLocale[] {
  const routingFile = path.join(process.cwd(), 'src/i18n/routing.ts');
  const source = fs.readFileSync(routingFile, 'utf8');
  const localesBlock = source.match(/locales:\s*\[([\s\S]*?)\]/)?.[1] ?? '';

  return Array.from(localesBlock.matchAll(/'([^']+)'/g), (match) => match[1] as LegalLocale);
}

describe('legalPageTranslations', () => {
  test('covers every supported locale', () => {
    expect(Object.keys(legalPageTranslations).sort()).toEqual(getLocalesFromRoutingSource().sort());
  });

  test('provides complete terms and cookies sections for each locale', () => {
    for (const locale of getLocalesFromRoutingSource()) {
      const translation = legalPageTranslations[locale];

      expect(translation.terms).toHaveLength(6);
      expect(translation.cookies).toHaveLength(5);

      for (const [title, paragraph] of translation.terms) {
        expect(title).toBeTruthy();
        expect(paragraph).toBeTruthy();
      }

      for (const [title, paragraph] of translation.cookies) {
        expect(title).toBeTruthy();
        expect(paragraph).toBeTruthy();
      }
    }
  });
});
