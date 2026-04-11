import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message } = body;

    if (!name || !email || !service) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const rows = [['Full Name', name], ['Company', company || '—'], ['Email', email], ['Phone', phone || '—']];

    // ── Notification email to company ────────────────────────────────
    await transporter.sendMail({
      from: `"D&O Website" <${process.env.GMAIL_USER}>`,
      to: 'info@docargoconnect.com',
      replyTo: email,
      subject: `New Quote Request — ${service} from ${name}`,
      html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#F9FAFB;font-family:Helvetica,Arial,sans-serif;">
<div style="height:4px;background:linear-gradient(90deg,#F5C518,#1A8A3C,#F5C518);"></div>
<div style="max-width:600px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
  <div style="background:linear-gradient(135deg,#1E0A4F,#2D0F6B);padding:36px 40px;">
    <div style="font-weight:900;font-size:1rem;color:#F5C518;letter-spacing:0.06em;margin-bottom:10px;">D&O CARGO CONNECT</div>
    <h1 style="color:white;font-size:1.5rem;font-weight:900;margin:0;">New Quote Request!</h1>
    <p style="color:rgba(255,255,255,0.55);margin:8px 0 0;font-size:0.88rem;">Submitted via docargoconnect.com</p>
  </div>
  <div style="padding:36px 40px;">
    <div style="background:rgba(245,197,24,0.08);border:1px solid rgba(245,197,24,0.3);border-radius:10px;padding:16px 20px;margin-bottom:28px;">
      <div style="font-size:0.68rem;font-weight:700;color:#D4A800;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Requested Service</div>
      <div style="font-weight:800;font-size:1.1rem;color:#1E0A4F;">${service}</div>
    </div>
    <h2 style="font-size:0.72rem;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 14px;">Contact Information</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      ${rows.map(([l,v]) => `<tr style="border-bottom:1px solid #F3F4F6;"><td style="padding:11px 0;font-size:0.78rem;font-weight:700;color:#6B7280;text-transform:uppercase;width:130px;">${l}</td><td style="padding:11px 0;font-size:0.9rem;color:#1F2937;">${v}</td></tr>`).join('')}
    </table>
    ${message ? `<h2 style="font-size:0.72rem;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 12px;">Shipment Details</h2><div style="background:#F9FAFB;border-left:3px solid #F5C518;padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:24px;"><p style="margin:0;font-size:0.88rem;color:#374151;line-height:1.7;">${message}</p></div>` : ''}
    <div style="background:linear-gradient(135deg,#1E0A4F,#2D0F6B);border-radius:12px;padding:24px;text-align:center;">
      <p style="color:rgba(255,255,255,0.65);font-size:0.85rem;margin:0 0 14px;">Reply directly to respond to ${name}</p>
      <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#F5C518,#FFD94D);color:#1E0A4F;font-weight:800;font-size:0.82rem;letter-spacing:0.06em;text-transform:uppercase;padding:11px 26px;border-radius:999px;text-decoration:none;">Reply to ${name} →</a>
    </div>
  </div>
  <div style="background:#F9FAFB;border-top:1px solid #F3F4F6;padding:18px 40px;text-align:center;">
    <p style="margin:0;font-size:0.73rem;color:#9CA3AF;">D&O Cargo Connect · 6804 Hwy 6 S Ste E #1009, Houston, TX 77083</p>
  </div>
</div></body></html>`,
    });

    // ── Confirmation email to client ──────────────────────────────────
    await transporter.sendMail({
      from: `"D&O Cargo Connect" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We received your quote request, ${name.split(' ')[0]}!`,
      html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#F9FAFB;font-family:Helvetica,Arial,sans-serif;">
<div style="height:4px;background:linear-gradient(90deg,#F5C518,#1A8A3C,#F5C518);"></div>
<div style="max-width:600px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
  <div style="background:linear-gradient(135deg,#1E0A4F,#2D0F6B);padding:40px;text-align:center;">
    <div style="width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#F5C518,#FFD94D);margin:0 auto 14px;display:flex;align-items:center;justify-content:center;font-weight:900;color:#1E0A4F;font-size:0.85rem;line-height:54px;text-align:center;">D&O</div>
    <h1 style="color:white;font-size:1.6rem;font-weight:900;margin:0 0 8px;">Thanks, ${name.split(' ')[0]}!</h1>
    <p style="color:rgba(255,255,255,0.6);margin:0;font-size:0.92rem;">We've received your request and will respond shortly.</p>
  </div>
  <div style="padding:36px 40px;">
    <div style="background:rgba(26,138,60,0.06);border:1px solid rgba(26,138,60,0.2);border-radius:10px;padding:14px 18px;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
      <div style="width:30px;height:30px;border-radius:50%;background:#1A8A3C;text-align:center;line-height:30px;color:white;font-size:1rem;flex-shrink:0;">✓</div>
      <div>
        <div style="font-weight:700;font-size:0.92rem;color:#1A8A3C;">Quote Request Received</div>
        <div style="font-size:0.78rem;color:#6B7280;margin-top:2px;">Our team will respond within 2 business hours</div>
      </div>
    </div>
    <p style="color:#374151;font-size:0.92rem;line-height:1.75;margin:0 0 18px;">Hi ${name.split(' ')[0]}, thank you for contacting D&O Cargo Connect. We've received your request for <strong>${service}</strong> and our team is already reviewing the details.</p>
    <p style="color:#374151;font-size:0.92rem;line-height:1.75;margin:0 0 28px;">Expect to hear back within <strong>2 business hours</strong> with a personalized freight solution and competitive quote.</p>
    <h2 style="font-size:0.72rem;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 14px;">What Happens Next</h2>
    ${[['1','Review','Our team reviews your shipment requirements'],['2','Optimize','We find the best route and carrier for your cargo'],['3','Quote','You receive a detailed, competitive freight quote']].map(([n,s,d]) => `<div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:12px;"><div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#F5C518,#FFD94D);text-align:center;line-height:26px;font-weight:900;font-size:0.78rem;color:#1E0A4F;flex-shrink:0;">${n}</div><div style="padding-top:3px;font-size:0.88rem;color:#374151;"><strong>${s}</strong> — ${d}</div></div>`).join('')}
    <div style="background:#F9FAFB;border-radius:12px;padding:18px 22px;margin-top:24px;">
      <p style="margin:0 0 8px;font-size:0.85rem;font-weight:700;color:#1E0A4F;">Need to reach us sooner?</p>
      <p style="margin:0;font-size:0.84rem;color:#6B7280;">📧 <a href="mailto:info@docargoconnect.com" style="color:#2D0F6B;">info@docargoconnect.com</a></p>
      <p style="margin:5px 0 0;font-size:0.84rem;color:#6B7280;">📞 <a href="tel:+13464046682" style="color:#2D0F6B;">(346) 404-6682</a></p>
    </div>
  </div>
  <div style="background:#1E0A4F;padding:22px 40px;text-align:center;">
    <p style="margin:0;font-size:0.78rem;color:rgba(255,255,255,0.35);">D&O Cargo Connect · 6804 Hwy 6 S Ste E #1009, Houston, TX 77083</p>
    <p style="margin:5px 0 0;font-size:0.72rem;color:rgba(255,255,255,0.2);">© ${new Date().getFullYear()} D&O Cargo Connect. All rights reserved.</p>
  </div>
</div></body></html>`,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send. Please try again.' }, { status: 500 });
  }
}
