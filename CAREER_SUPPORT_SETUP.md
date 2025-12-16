# Career Support Feature Setup Guide

## Overview

The Career Support feature has been successfully added to your portfolio. Users can now upload their resumes (PDF only) and pay $5 for a professional resume review that will be completed within 5 business days.

## What Was Implemented

### Frontend Changes

1. **New Page**: `src/pages/CareerSupport.tsx`
   - Resume upload functionality (PDF only, max 5MB)
   - Email collection form
   - Stripe payment integration dialog
   - Success/confirmation UI

2. **Home Page Update**: `src/pages/Index.tsx`
   - Replaced "Explore Writing" button with "Career Support" button

3. **Routing**: `src/App.tsx`
   - Added route for `/career-support`

### Dependencies Added

- `@stripe/stripe-js` - Stripe JavaScript SDK
- `@stripe/react-stripe-js` - React components for Stripe

## Setup Instructions

### 1. Get Stripe API Keys

1. Sign up for a Stripe account at https://stripe.com
2. Go to Developers → API keys
3. Copy your **Publishable key** (starts with `pk_test_` for test mode)
4. Copy your **Secret key** (starts with `sk_test_` for test mode)

### 2. Set Environment Variables

Create a `.env` file in the root of your project:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

**Note**: For production, use `pk_live_...` keys and set up proper environment variables on your hosting platform.

### 3. Backend Setup Required

The frontend is ready, but you need to set up a backend to:

1. **Handle file uploads** - Store PDF files securely
2. **Create Stripe Checkout Sessions** - Process payments
3. **Handle Stripe webhooks** - Update payment status
4. **Store data in database** - Track submissions and payments

See `BACKEND_EXAMPLE.md` for detailed backend implementation examples.

See `DATABASE_SCHEMA.md` for the required database schema.

### 4. Backend Endpoints Needed

You'll need to create these endpoints:

- `POST /api/create-checkout-session` - Creates Stripe checkout session
- `POST /api/stripe-webhook` - Handles Stripe webhook events

### 5. Testing

1. Start your development server: `npm start`
2. Navigate to the Career Support page
3. Use Stripe test card: `4242 4242 4242 4242`
4. Use any future expiry date and any 3-digit CVC
5. Test the complete flow

## Current Status

✅ Frontend UI complete
✅ File upload UI complete
✅ Payment dialog complete
✅ Stripe integration ready
⏳ Backend implementation needed
⏳ Database setup needed
⏳ File storage setup needed

## Next Steps

1. **Choose a backend solution**:
   - Node.js/Express
   - Next.js API routes
   - Serverless functions (Vercel/Netlify)
   - Supabase Edge Functions

2. **Choose a database**:
   - PostgreSQL (recommended)
   - Supabase (PostgreSQL as a service)
   - Firebase Firestore
   - SQLite (for development)

3. **Choose file storage**:
   - AWS S3
   - Cloudinary
   - Supabase Storage
   - Local storage (development only)

4. **Implement backend endpoints** (see `BACKEND_EXAMPLE.md`)

5. **Set up Stripe webhooks**:
   - Use Stripe CLI for local testing: `stripe listen --forward-to localhost:3000/api/stripe-webhook`
   - Configure webhook endpoint in Stripe Dashboard for production

6. **Set up email notifications** (optional but recommended):
   - Send confirmation email when payment succeeds
   - Send feedback email when review is completed
   - Consider using SendGrid, Resend, or AWS SES

## Important Notes

- The frontend currently expects the backend to be at `/api/create-checkout-session`
- You may need to configure CORS on your backend to allow requests from your frontend
- File uploads should be validated on both client and server side
- Always use HTTPS in production
- Store Stripe secret keys securely (never in frontend code)

## Support

For questions or issues:
- Stripe Documentation: https://stripe.com/docs
- Stripe Checkout: https://stripe.com/docs/payments/checkout
- Stripe Webhooks: https://stripe.com/docs/webhooks

