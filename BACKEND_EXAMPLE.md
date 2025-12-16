# Backend Implementation Example

This document provides example backend code for implementing the Career Support payment and file upload functionality.

## Required Backend Endpoints

### 1. Create Checkout Session Endpoint

**POST /api/create-checkout-session**

This endpoint should:
1. Accept the uploaded PDF file
2. Store it temporarily or permanently
3. Create a Stripe Checkout Session
4. Store submission record in database
5. Return the session ID

#### Example Implementation (Node.js/Express)

```javascript
const express = require('express');
const multer = require('multer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs').promises;

const router = express.Router();

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/temp/',
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  }
});

router.post('/create-checkout-session', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const submissionId = uuidv4();
    const fileName = `${submissionId}_${req.file.originalname}`;
    
    // Move file to permanent storage
    const permanentPath = path.join('uploads/resumes', fileName);
    await fs.rename(req.file.path, permanentPath);

    // Create database record
    const submission = await db.query(
      `INSERT INTO resume_submissions 
       (id, file_name, file_path, file_size, payment_status, review_status, user_email)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        submissionId,
        req.file.originalname,
        permanentPath,
        req.file.size,
        'pending',
        'pending',
        req.body.email || 'unknown@example.com' // Get from form if available
      ]
    );

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Resume Review Service',
              description: 'Professional resume review by Kasey',
            },
            unit_amount: 500, // $5.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/career-support?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/career-support?canceled=true`,
      metadata: {
        submission_id: submissionId,
        file_name: req.file.originalname,
      },
      client_reference_id: submissionId,
    });

    // Update database with checkout session ID
    await db.query(
      `UPDATE resume_submissions 
       SET stripe_checkout_session_id = $1 
       WHERE id = $2`,
      [session.id, submissionId]
    );

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});
```

### 2. Stripe Webhook Endpoint

**POST /api/stripe-webhook**

This endpoint handles Stripe webhook events to update payment status.

```javascript
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

// Stripe webhook endpoint (must use raw body)
router.post('/stripe-webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Store webhook event
  await db.query(
    `INSERT INTO stripe_webhook_events 
     (stripe_event_id, event_type, payload, processed)
     VALUES ($1, $2, $3, $4)`,
    [event.id, event.type, JSON.stringify(event.data.object), false]
  );

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      const submissionId = session.client_reference_id || session.metadata?.submission_id;
      
      if (submissionId) {
        await db.query(
          `UPDATE resume_submissions 
           SET payment_status = 'paid',
               stripe_payment_intent_id = $1,
               payment_completed_at = CURRENT_TIMESTAMP
           WHERE id = $2`,
          [session.payment_intent, submissionId]
        );

        // Send confirmation email to user
        // await sendEmail(...);
      }
      break;

    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Additional payment success handling if needed
      break;

    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      // Handle failed payment
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Mark webhook as processed
  await db.query(
    `UPDATE stripe_webhook_events 
     SET processed = true 
     WHERE stripe_event_id = $1`,
    [event.id]
  );

  res.json({ received: true });
});
```

### 3. Alternative: Serverless Function (Vercel/Netlify)

If using serverless functions, here's an example for Vercel:

**api/create-checkout-session.js**

```javascript
import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // In serverless, you'd typically upload file to S3/Cloudinary first
    // For this example, assume file URL is passed
    const { fileUrl, fileName, fileSize, userEmail } = req.body;

    const submissionId = uuidv4();

    // Store in database (e.g., Supabase, PlanetScale, etc.)
    // await db.insert('resume_submissions', { ... });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Resume Review Service',
              description: 'Professional resume review by Kasey',
            },
            unit_amount: 500,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/career-support?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/career-support?canceled=true`,
      metadata: {
        submission_id: submissionId,
        file_name: fileName,
      },
      client_reference_id: submissionId,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
```

## Frontend Updates Needed

Update the `CareerSupport.tsx` component to handle the success/cancel redirects:

```typescript
// Add to CareerSupport component
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === 'true') {
    setIsUploaded(true);
    // Clear URL params
    window.history.replaceState({}, '', '/career-support');
  }
  if (urlParams.get('canceled') === 'true') {
    // Handle cancellation
    window.history.replaceState({}, '', '/career-support');
  }
}, []);
```

## Required NPM Packages

```bash
npm install stripe multer uuid
npm install --save-dev @types/multer @types/uuid
```

## Environment Variables

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
FRONTEND_URL=http://localhost:5173
DATABASE_URL=postgresql://...
```

## Testing with Stripe

1. Use Stripe test mode keys
2. Use test card: `4242 4242 4242 4242`
3. Any future expiry date and CVC
4. Test webhooks using Stripe CLI: `stripe listen --forward-to localhost:3000/api/stripe-webhook`

