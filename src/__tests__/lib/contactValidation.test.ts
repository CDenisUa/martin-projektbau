import { validate, type FormState } from '@/lib/contactValidation';

const t = (key: string) => key;

const valid: FormState = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+41 44 123 45 67',
  message: 'Hello world',
};

describe('validate', () => {
  test('returns no errors for a valid form', () => {
    expect(validate(valid, t)).toEqual({});
  });

  describe('name', () => {
    test('rejects empty name', () => {
      expect(validate({ ...valid, name: '' }, t)).toHaveProperty('name');
    });
    test('rejects whitespace-only name', () => {
      expect(validate({ ...valid, name: '   ' }, t)).toHaveProperty('name');
    });
    test('rejects name shorter than 2 chars', () => {
      expect(validate({ ...valid, name: 'A' }, t)).toHaveProperty('name');
    });
    test('accepts name with exactly 2 chars', () => {
      expect(validate({ ...valid, name: 'Jo' }, t)).not.toHaveProperty('name');
    });
  });

  describe('email', () => {
    test('rejects empty email', () => {
      expect(validate({ ...valid, email: '' }, t)).toHaveProperty('email');
    });
    test('rejects email without @', () => {
      expect(validate({ ...valid, email: 'notanemail' }, t)).toHaveProperty('email');
    });
    test('rejects email without domain', () => {
      expect(validate({ ...valid, email: 'user@' }, t)).toHaveProperty('email');
    });
    test('rejects email with spaces', () => {
      expect(validate({ ...valid, email: 'user @example.com' }, t)).toHaveProperty('email');
    });
    test('accepts valid email', () => {
      expect(validate({ ...valid, email: 'user@domain.org' }, t)).not.toHaveProperty('email');
    });
  });

  describe('phone', () => {
    test('rejects empty phone', () => {
      expect(validate({ ...valid, phone: '' }, t)).toHaveProperty('phone');
    });
    test('rejects whitespace-only phone', () => {
      expect(validate({ ...valid, phone: '   ' }, t)).toHaveProperty('phone');
    });
    test('accepts any non-empty phone', () => {
      expect(validate({ ...valid, phone: '+41' }, t)).not.toHaveProperty('phone');
    });
  });

  describe('message', () => {
    test('rejects empty message', () => {
      expect(validate({ ...valid, message: '' }, t)).toHaveProperty('message');
    });
    test('rejects message shorter than 5 chars', () => {
      expect(validate({ ...valid, message: 'Hi' }, t)).toHaveProperty('message');
    });
    test('accepts message with exactly 5 chars', () => {
      expect(validate({ ...valid, message: 'Hello' }, t)).not.toHaveProperty('message');
    });
  });

  test('uses t() for all error messages', () => {
    const mockT = jest.fn((key: string) => `msg:${key}`);
    const result = validate({ name: '', email: '', phone: '', message: '' }, mockT);
    expect(result.name).toBe('msg:errorName');
    expect(result.email).toBe('msg:errorEmail');
    expect(result.phone).toBe('msg:errorPhone');
    expect(result.message).toBe('msg:errorMessage');
  });

  test('returns errors only for invalid fields', () => {
    const result = validate({ ...valid, name: 'X' }, t);
    expect(result).toHaveProperty('name');
    expect(result).not.toHaveProperty('email');
    expect(result).not.toHaveProperty('phone');
    expect(result).not.toHaveProperty('message');
  });
});
