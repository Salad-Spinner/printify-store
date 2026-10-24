import nodemailer from 'nodemailer';

export const prerender = false;

export async function POST({ request }) {
  try {
    const body = await request.json();

    const {
      REFUND_EMAIL_TO,
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS
    } = import.meta.env;

    if (!REFUND_EMAIL_TO || !SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return new Response(JSON.stringify({
        error: 'SMTP config is missing.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    const html = `
      <h2>WAM Merch Refund Request</h2>
      <ul>
        <li><strong>Legal Name:</strong> ${body.legalName || ''}</li>
        <li><strong>Reason:</strong> ${body.refundReason || ''}</li>
        <li><strong>Order Number:</strong> ${body.orderNumber || ''}</li>
        <li><strong>Items:</strong> ${body.itemNames || ''}</li>
        <li><strong>Phone:</strong> ${body.phone || ''}</li>
        <li><strong>Email:</strong> ${body.email || ''}</li>
      </ul>
    `;

    await transporter.sendMail({
      from: `"WAM Studios" <${SMTP_USER}>`,
      to: REFUND_EMAIL_TO,
      subject: 'New refund request',
      html
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({
      error: 'Failed to send refund email.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
