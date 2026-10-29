import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Emails Kasey about a new resume-review submission via Resend, with the
 * buyer's email and the resume PDF attached (plus a download link).
 *
 * Env vars:
 * - RESEND_API_KEY      (required for the email; without it this returns
 *                        notified:false and the resume stays safe in Blob)
 * - RESUME_NOTIFY_EMAIL (recipient; defaults to kaseykungfu@gmail.com)
 */

const BLOB_HOST_SUFFIX = '.public.blob.vercel-storage.com';
const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, blobUrl, fileName, size } = (req.body ?? {}) as {
    email?: string;
    blobUrl?: string;
    fileName?: string;
    size?: number;
  };

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(blobUrl ?? '');
  } catch {
    return res.status(400).json({ error: 'Invalid blob URL' });
  }
  // Only accept files that live in our own Blob store
  if (parsedUrl.protocol !== 'https:' || !parsedUrl.hostname.endsWith(BLOB_HOST_SUFFIX)) {
    return res.status(400).json({ error: 'Invalid blob URL' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.RESUME_NOTIFY_EMAIL || 'kaseykungfu@gmail.com';

  if (!apiKey) {
    // The resume is already stored in Blob, so nothing is lost — but flag
    // that no email went out so it shows up in function logs.
    console.warn('RESEND_API_KEY not set; skipping notification email for', email);
    return res.status(200).json({ notified: false, reason: 'email-not-configured' });
  }

  // Attach the PDF when it's within Resend's comfortable size range;
  // the download link is always included as a fallback.
  const attachments: Array<{ filename: string; content: string }> = [];
  if (typeof size !== 'number' || size <= MAX_ATTACHMENT_BYTES) {
    try {
      const blobRes = await fetch(parsedUrl.toString());
      if (blobRes.ok) {
        const buf = Buffer.from(await blobRes.arrayBuffer());
        if (buf.byteLength <= MAX_ATTACHMENT_BYTES) {
          attachments.push({
            filename: fileName || 'resume.pdf',
            content: buf.toString('base64'),
          });
        }
      }
    } catch (err) {
      console.warn('Could not fetch blob for attachment:', err);
    }
  }

  const submittedAt = new Date().toISOString();
  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Resume Review <onboarding@resend.dev>',
      to: [notifyEmail],
      reply_to: email,
      subject: `New $5 resume review: ${email}`,
      text: [
        'New resume review submission on kaseyfu.com/career-support.',
        '',
        `Buyer email: ${email}`,
        `Resume: ${fileName || 'resume.pdf'}`,
        `Download: ${parsedUrl.toString()}`,
        `Submitted: ${submittedAt}`,
        '',
        'Payment: check the Stripe dashboard for the matching $5 payment.',
        '(This email is sent when the resume is uploaded, just before the buyer is sent to Stripe.)',
      ].join('\n'),
      attachments,
    }),
  });

  if (!emailRes.ok) {
    const detail = await emailRes.text().catch(() => '');
    console.error('Resend API error:', emailRes.status, detail);
    return res.status(200).json({ notified: false, reason: 'email-send-failed' });
  }

  return res.status(200).json({ notified: true });
}
