import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  const { name, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Message from the Website: ${subject}`,
      html: `
        <div style="background-color: #f5f5f5; padding: 40px 0;">
          <div style="
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            padding: 32px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            color: #333333;
            line-height: 1.6;
          ">
            <h2 style="margin-top: 0; margin-bottom: 24px; text-align: center; color: #333333;">
              📩 New Message from the Website
            </h2>
  
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="font-weight: bold; padding: 8px 0;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px 0;">Email:</td>
                <td style="padding: 8px 0;">${email}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px 0;">Subject:</td>
                <td style="padding: 8px 0;">${subject}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px 0; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
        
            <div style="margin-top: 32px; text-align: center; font-size: 12px; color: #999999;">
              This is an automated message. Please do not reply directly to this email.
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Ошибка при отправке письма (contact):", err);
    return res.status(500).json({ success: false });
  }
}
