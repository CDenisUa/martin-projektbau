import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildContactEmail, buildConfirmationEmail } from '@/lib/emailTemplate';

export async function POST(req: NextRequest) {
  try {
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
    to: 'info@martinprojektgroup.ch',
    replyTo: email,
    subject: `Neue Anfrage von ${name}`,
    html: buildContactEmail(name, email, phone, message),
  });

  if (error) {
    console.error('Resend error:', JSON.stringify(error));
    return NextResponse.json({ error: 'Failed to send email', detail: error }, { status: 500 });
  }

  await resend.emails.send({
    from: 'Martin Projekt Group <noreply@martinprojektgroup.ch>',
    to: email,
    subject: 'Ihre Anfrage wurde erhalten – Martin Projekt Group',
    html: buildConfirmationEmail(),
  });

  return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Caught exception:', e);
    return NextResponse.json({ error: 'Exception', detail: String(e) }, { status: 500 });
  }
}
