import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    res.status(200).json({ 
      ok: true, 
      message: 'API funcionando correctamente',
      method: req.method,
      body: req.body,
      env: {
        hasSmtpUser: !!process.env.SMTP_USER,
        hasSmtpPass: !!process.env.SMTP_PASS,
        nodeEnv: process.env.NODE_ENV
      }
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Error en test endpoint',
      details: error.message 
    });
  }
}
