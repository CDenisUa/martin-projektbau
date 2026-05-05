import { buildContactEmail } from '@/lib/emailTemplate';

describe('buildContactEmail', () => {
  const html = buildContactEmail('Jane Doe', 'jane@example.com', '+41 79 000 00 00', 'Test message');
  const htmlWithoutPhone = buildContactEmail('Jane Doe', 'jane@example.com', '', 'Test message');

  test('returns a non-empty string', () => {
    expect(typeof html).toBe('string');
    expect(html.length).toBeGreaterThan(100);
  });

  test('includes the recipient name', () => {
    expect(html).toContain('Jane Doe');
  });

  test('includes the email address', () => {
    expect(html).toContain('jane@example.com');
  });

  test('includes the phone number', () => {
    expect(html).toContain('+41 79 000 00 00');
  });

  test('includes the message content', () => {
    expect(html).toContain('Test message');
  });

  test('includes a mailto link for the email', () => {
    expect(html).toContain('mailto:jane@example.com');
  });

  test('includes a tel link for the phone', () => {
    expect(html).toContain('tel:+41 79 000 00 00');
  });

  test('renders a fallback when no phone is provided', () => {
    expect(htmlWithoutPhone).toContain('Nicht angegeben');
    expect(htmlWithoutPhone).not.toContain('href="tel:"');
  });

  test('uses the current production domain for branded assets', () => {
    expect(html).toContain('https://martinprojektgroup.ch/images/logo/martin_white.png');
    expect(html).not.toContain('vercel.app/images/logo/martin_white.png');
  });

  test('is valid HTML with DOCTYPE', () => {
    expect(html.trim()).toMatch(/^<!DOCTYPE html>/i);
  });
});
