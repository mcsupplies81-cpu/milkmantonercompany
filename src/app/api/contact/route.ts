import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, company, phone, email, service, message, website } =
      await request.json();

    // Honeypot - bots fill this field, humans never see it
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Milk Man Website <no-reply@milkmancompany.com>",
      to: ["suzette@milkmancompany.com"],
      cc: ["shamus@milkmancompany.com"],
      bcc: ["mcsupplies81@gmail.com"],
      replyTo: email,
      subject: `New quote request from ${name}${company ? ` - ${company}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; padding: 24px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Quote Request</h2>
            <p style="color: #8fa8bc; margin: 4px 0 0; font-size: 13px;">milkmancompany.com contact form</p>
          </div>

          <div style="padding: 24px; border: 1.5px solid #dde8ee; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 140px;">
                  <strong style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.05em;">Name</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">
                  ${name}
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <strong style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.05em;">Company</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">
                  ${company}
                </td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <strong style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.05em;">Phone</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">
                  <a href="tel:${phone}" style="color: #4a6578;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <strong style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.05em;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">
                  <a href="mailto:${email}" style="color: #4a6578;">${email}</a>
                </td>
              </tr>
              ${service ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <strong style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.05em;">Service</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">
                  ${service}
                </td>
              </tr>` : ""}
              ${message ? `
              <tr>
                <td style="padding: 10px 0; vertical-align: top;">
                  <strong style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.05em;">Message</strong>
                </td>
                <td style="padding: 10px 0; font-size: 14px; color: #1a1a1a; line-height: 1.6;">
                  ${message.replace(/\n/g, "<br>")}
                </td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #f0f1f3; border-left: 3px solid #4a6578;">
              <p style="margin: 0; font-size: 12px; color: #4a6578;">
                Reply directly to this email to reach ${name} at ${email}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please call us at (916) 253-9804." },
      { status: 500 }
    );
  }
}
