import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, message } = await req.json();

  // Server-side validation
  if (!name?.trim() || name.trim().length < 2) {
    return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  if (!phone?.trim()) {
    return NextResponse.json({ error: 'Phone required' }, { status: 400 });
  }
  if (!message?.trim() || message.trim().length < 5) {
    return NextResponse.json({ error: 'Message too short' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Kontaktformular <onboarding@resend.dev>',
    to: 'chepigadeveloper@gmail.com',
    replyTo: email,
    subject: `Neue Anfrage von ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9;">
        <div style="background: #0A1628; padding: 24px 32px; margin-bottom: 32px;">
          <p style="color: #3B82F6; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 4px 0;">Martin Projektbau GmbH</p>
          <h1 style="color: #ffffff; font-weight: 300; font-size: 22px; margin: 0;">Neue Kontaktanfrage</h1>
        </div>
        <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">E-Mail</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Telefon</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;"><a href="tel:${phone}" style="color: #3B82F6;">${phone}</a></td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 12px 0;">Nachricht</p>
            <p style="color: #374151; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <p style="color: #9ca3af; font-size: 11px; text-align: center; margin-top: 24px;">martin-projektbau.ch</p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
