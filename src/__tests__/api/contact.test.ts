/**
 * @jest-environment node
 */
import { POST } from '@/app/api/contact/route';

const mockSend = jest.fn();

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: mockSend },
  })),
}));

jest.mock('@/lib/emailTemplate', () => ({
  buildContactEmail: jest.fn(() => '<html>mock</html>'),
}));

const VALID = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+41 44 123 45 67',
  message: 'Hello world, this is my inquiry',
};

function makeReq(body: object) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }) as unknown as import('next/server').NextRequest;
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    mockSend.mockResolvedValue({ data: { id: 'test-id' }, error: null });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('returns 200 and { success: true } for valid data', async () => {
    const res = await POST(makeReq(VALID));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });
  });

  test('calls resend with correct to and replyTo', async () => {
    await POST(makeReq(VALID));
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'chepigadeveloper@gmail.com',
        replyTo: VALID.email,
        subject: `Neue Anfrage von ${VALID.name}`,
      }),
    );
  });

  describe('validation — 400 responses', () => {
    test('rejects empty name', async () => {
      const res = await POST(makeReq({ ...VALID, name: '' }));
      expect(res.status).toBe(400);
    });

    test('rejects single-char name', async () => {
      const res = await POST(makeReq({ ...VALID, name: 'A' }));
      expect(res.status).toBe(400);
      expect((await res.json()).error).toBe('Invalid name');
    });

    test('rejects invalid email', async () => {
      const res = await POST(makeReq({ ...VALID, email: 'not-an-email' }));
      expect(res.status).toBe(400);
      expect((await res.json()).error).toBe('Invalid email');
    });

    test('rejects email without domain', async () => {
      const res = await POST(makeReq({ ...VALID, email: 'user@' }));
      expect(res.status).toBe(400);
    });

    test('rejects empty phone', async () => {
      const res = await POST(makeReq({ ...VALID, phone: '' }));
      expect(res.status).toBe(400);
      expect((await res.json()).error).toBe('Phone required');
    });

    test('rejects short message', async () => {
      const res = await POST(makeReq({ ...VALID, message: 'Hi' }));
      expect(res.status).toBe(400);
      expect((await res.json()).error).toBe('Message too short');
    });

    test('rejects missing message', async () => {
      const res = await POST(makeReq({ ...VALID, message: '' }));
      expect(res.status).toBe(400);
    });
  });

  describe('error handling', () => {
    test('returns 500 when Resend returns an error', async () => {
      mockSend.mockResolvedValue({ data: null, error: { message: 'API Error' } });
      const res = await POST(makeReq(VALID));
      expect(res.status).toBe(500);
      expect((await res.json()).error).toBe('Failed to send email');
    });

    test('returns 500 when Resend throws', async () => {
      mockSend.mockRejectedValue(new Error('Network failure'));
      const res = await POST(makeReq(VALID));
      expect(res.status).toBe(500);
    });
  });
});
