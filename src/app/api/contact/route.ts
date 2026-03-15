import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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
    to: 'chepigadeveloper@gmail.com',
    replyTo: email,
    subject: `Neue Anfrage von ${name}`,
    html: `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0A1628;padding:32px 40px;border-radius:8px 8px 0 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <img src="https://martin-projektbau.vercel.app/images/martin_logo.png"
                       alt="Martin Projektbau GmbH"
                       height="56"
                       style="display:block;filter:brightness(0) invert(1);" />
                </td>
                <td align="right">
                  <span style="background:#3B82F6;color:#ffffff;font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;padding:4px 12px;border-radius:2px;">Neue Anfrage</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Blue accent line -->
        <tr><td style="background:#3B82F6;height:3px;"></td></tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:40px;">

            <h1 style="margin:0 0 6px;font-size:22px;font-weight:300;color:#0A1628;letter-spacing:-0.3px;">Neue Kontaktanfrage</h1>
            <p style="margin:0 0 32px;font-size:13px;color:#94a3b8;">Eingegangen über das Kontaktformular auf martin-projektbau.ch</p>

            <!-- Info cards -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td width="50%" style="padding:0 8px 0 0;vertical-align:top;">
                  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:16px 18px;">
                    <p style="margin:0 0 4px;font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;">Name</p>
                    <p style="margin:0;font-size:15px;color:#0f172a;font-weight:500;">${name}</p>
                  </div>
                </td>
                <td width="50%" style="padding:0 0 0 8px;vertical-align:top;">
                  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:16px 18px;">
                    <p style="margin:0 0 4px;font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;">Telefon</p>
                    <p style="margin:0;font-size:15px;color:#0f172a;font-weight:500;">
                      <a href="tel:${phone}" style="color:#3B82F6;text-decoration:none;">${phone}</a>
                    </p>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Email -->
            <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:16px 18px;margin-bottom:28px;">
              <p style="margin:0 0 4px;font-size:10px;color:#3B82F6;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;">E-Mail</p>
              <a href="mailto:${email}" style="font-size:15px;color:#1d4ed8;font-weight:500;text-decoration:none;">${email}</a>
            </div>

            <!-- Message -->
            <div style="border-left:3px solid #3B82F6;padding:18px 20px;background:#fafafa;border-radius:0 6px 6px 0;margin-bottom:8px;">
              <p style="margin:0 0 10px;font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;">Nachricht</p>
              <p style="margin:0;font-size:14px;color:#374151;line-height:1.75;white-space:pre-wrap;">${message}</p>
            </div>

          </td>
        </tr>

        <!-- Reply CTA -->
        <tr>
          <td style="background:#f8fafc;padding:24px 40px;border:1px solid #e2e8f0;border-top:0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:12px;color:#94a3b8;">Direkt antworten an <strong style="color:#0A1628;">${name}</strong></p>
                </td>
                <td align="right">
                  <a href="mailto:${email}" style="display:inline-block;background:#0A1628;color:#ffffff;font-size:12px;font-weight:600;text-decoration:none;padding:10px 22px;border-radius:4px;letter-spacing:0.05em;">Antworten</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#cbd5e1;">© ${new Date().getFullYear()} Martin Projektbau GmbH · martin-projektbau.ch</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  });

  if (error) {
    console.error('Resend error:', JSON.stringify(error));
    return NextResponse.json({ error: 'Failed to send email', detail: error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Caught exception:', e);
    return NextResponse.json({ error: 'Exception', detail: String(e) }, { status: 500 });
  }
}
