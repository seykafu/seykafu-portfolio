/**
 * Resume submission for the Career Support flow.
 *
 * The resume is uploaded directly from the browser to Vercel Blob
 * (authorized by /api/resume-upload) and Kasey is notified by email
 * (/api/notify) BEFORE the buyer is redirected to Stripe, so nothing is
 * lost if the redirect back from Stripe never happens.
 */
import { upload } from '@vercel/blob/client';

export interface ResumeSubmissionResult {
  /** The PDF is safely stored in Vercel Blob */
  uploaded: boolean;
  /** The notification email to Kasey was sent */
  notified: boolean;
  blobUrl?: string;
}

/** What we persist in sessionStorage across the Stripe redirect. */
export interface PendingSubmission {
  email: string;
  fileName: string;
  uploaded: boolean;
  notified: boolean;
  blobUrl?: string;
  timestamp: number;
}

export const PENDING_SUBMISSION_KEY = 'pendingResumeSubmission';

/**
 * Upload the resume to Vercel Blob and notify Kasey by email.
 * Throws if the upload itself fails; a failed notification email is not
 * fatal because the file is already stored durably.
 */
export async function submitResume(file: File, email: string): Promise<ResumeSubmissionResult> {
  const blob = await upload(`resumes/${file.name}`, file, {
    access: 'public',
    handleUploadUrl: '/api/resume-upload',
    clientPayload: JSON.stringify({ email }),
  });

  let notified = false;
  try {
    const res = await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        blobUrl: blob.url,
        fileName: file.name,
        size: file.size,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      notified = data.notified === true;
    }
  } catch (err) {
    console.warn('Notification email failed (resume is still stored):', err);
  }

  return { uploaded: true, notified, blobUrl: blob.url };
}

export function savePendingSubmission(submission: PendingSubmission): void {
  try {
    sessionStorage.setItem(PENDING_SUBMISSION_KEY, JSON.stringify(submission));
  } catch {
    // sessionStorage unavailable (private mode etc.) — the resume is already
    // uploaded, we just lose the per-tab success state.
  }
}

export function readPendingSubmission(): PendingSubmission | null {
  try {
    const raw = sessionStorage.getItem(PENDING_SUBMISSION_KEY);
    return raw ? (JSON.parse(raw) as PendingSubmission) : null;
  } catch {
    return null;
  }
}

export function clearPendingSubmission(): void {
  try {
    sessionStorage.removeItem(PENDING_SUBMISSION_KEY);
  } catch {
    // ignore
  }
}
