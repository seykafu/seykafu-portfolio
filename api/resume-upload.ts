import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';

/**
 * Issues short-lived client-upload tokens for Vercel Blob so the buyer's
 * resume PDF is uploaded directly from the browser to the "resume-uploads"
 * store (direct upload avoids the 4.5MB serverless request body limit).
 *
 * Requires BLOB_READ_WRITE_TOKEN (set automatically when the store is
 * linked to the project).
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const jsonResponse = await handleUpload({
      body: req.body as HandleUploadBody,
      request: req,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        if (!pathname.startsWith('resumes/')) {
          throw new Error('Uploads must go to the resumes/ folder');
        }
        return {
          allowedContentTypes: ['application/pdf'],
          maximumSizeInBytes: 5 * 1024 * 1024, // matches the 5MB UI limit
          addRandomSuffix: true,
          tokenPayload: clientPayload ?? '',
        };
      },
      // Notification email is sent by /api/notify (called by the client),
      // because this callback does not fire in local development.
      onUploadCompleted: async () => {},
    });

    return res.status(200).json(jsonResponse);
  } catch (error) {
    return res.status(400).json({
      error: error instanceof Error ? error.message : 'Upload authorization failed',
    });
  }
}
