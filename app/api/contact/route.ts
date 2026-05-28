import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function esc(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br/>');
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Contact form is not configured yet. Please email us directly.' }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();

  const firstName    = String(body.firstName    ?? '').trim().slice(0, 200);
  const lastName     = String(body.lastName     ?? '').trim().slice(0, 200);
  const email        = String(body.email        ?? '').trim().slice(0, 500);
  const phone        = String(body.phone        ?? '').trim().slice(0, 100);
  const program      = String(body.program      ?? '').trim().slice(0, 200);
  const stage        = String(body.stage        ?? '').trim().slice(0, 200);
  const institutions = String(body.institutions ?? '').trim().slice(0, 500);
  const message      = String(body.message      ?? '').trim().slice(0, 5000);

  if (!firstName || !lastName || !email || !program || !stage || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const to   = process.env.CONTACT_EMAIL   || 'hello@theaxiomcollective.org';
  const from = process.env.RESEND_FROM     || 'onboarding@resend.dev';

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `New Consultation Inquiry — ${firstName} ${lastName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 640px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="font-size: 20px; margin-bottom: 24px; border-bottom: 2px solid #C0272D; padding-bottom: 12px;">
          New Consultation Inquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 40%;"><strong>Name</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${esc(firstName)} ${esc(lastName)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${esc(email)}</td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Phone / WhatsApp</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${esc(phone)}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Program Type</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${esc(program)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Application Stage</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${esc(stage)}</td>
          </tr>
          ${institutions ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Target Institutions</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${esc(institutions)}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top: 24px;">
          <strong>Goals / Background:</strong>
          <p style="margin-top: 8px; line-height: 1.6; color: #444;">${esc(message)}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send inquiry. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
