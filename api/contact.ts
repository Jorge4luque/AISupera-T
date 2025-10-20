import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

type RequestBody = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, company, email, message } = req.body as Partial<RequestBody>;

    const nameTrimmed = (name || '').trim();
    const companyTrimmed = (company || '').trim();
    const emailTrimmed = (email || '').trim();
    const messageTrimmed = (message || '').trim();

    if (!nameTrimmed || !emailTrimmed || !messageTrimmed) {
      res.status(400).json({ error: 'Campos obligatorios faltantes' });
      return;
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = (process.env.SMTP_SECURE || 'true') === 'true';
    const toEmail = process.env.TO_EMAIL || 'ai@supera-t.es';

    if (!smtpUser || !smtpPass) {
      res.status(500).json({ error: 'Faltan credenciales SMTP en variables de entorno' });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass }
    });

    const subject = `Nueva solicitud de contacto - ${nameTrimmed}`;
    const html = `
      <h2>Nueva solicitud de contacto</h2>
      <p><strong>Nombre:</strong> ${nameTrimmed}</p>
      <p><strong>Empresa:</strong> ${companyTrimmed || '-'}</p>
      <p><strong>Email:</strong> ${emailTrimmed}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${messageTrimmed.replace(/\n/g, '<br/>')}</p>
    `;

    await transporter.sendMail({
      from: `Web AI Supera-T <${smtpUser}>`,
      to: toEmail,
      replyTo: emailTrimmed,
      subject,
      html
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'No se pudo enviar el correo',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}