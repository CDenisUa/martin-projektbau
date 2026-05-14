import fs from 'node:fs';
import path from 'node:path';
import { legalInfo } from '@/lib/legalInfo';

const LEGAL_MESSAGE_KEYS = [
  'impressum.registerOfficeLabel',
  'impressum.registerLabel',
  'impressum.uidLabel',
  'impressum.vatLabel',
  'privacy.s9h',
  'privacy.s9p',
  'privacy.s10h',
  'privacy.s10p',
  'privacy.s11h',
  'privacy.s11p',
  'privacy.s12h',
  'privacy.s12p',
  'privacy.s13h',
  'privacy.s13p',
] as const;

function getValue(source: unknown, key: string) {
  return key.split('.').reduce<unknown>((value, part) => {
    if (!value || typeof value !== 'object') return undefined;
    return (value as Record<string, unknown>)[part];
  }, source);
}

describe('legal messages', () => {
  test('include required legal supplement copy for every locale', () => {
    const messagesDir = path.join(process.cwd(), 'messages');
    const files = fs.readdirSync(messagesDir).filter((file) => file.endsWith('.json'));

    for (const file of files) {
      const source = JSON.parse(fs.readFileSync(path.join(messagesDir, file), 'utf8'));

      for (const key of LEGAL_MESSAGE_KEYS) {
        expect(getValue(source, key)).toEqual(expect.any(String));
        expect((getValue(source, key) as string).trim()).not.toBe('');
      }
    }
  });

  test('keeps Swiss register identifiers separated', () => {
    expect(legalInfo.commercialRegister).toBe('CH-160.4.007.826-1');
    expect(legalInfo.uidNumber).toBe('CHE-143.218.393');
    expect(legalInfo.vatNumber).toBe('CHE-143.218.393 MWST');
  });
});
