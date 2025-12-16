# Database Schema for Career Support Feature

This document outlines the database schema needed to support the Career Support resume review feature.

## Required Tables

### 1. `resume_submissions` Table

Stores information about resume submissions and their payment status.

```sql
CREATE TABLE resume_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email VARCHAR(255) NOT NULL,
  user_name VARCHAR(255),
  file_name VARCHAR(255) NOT NULL,
  file_path TEXT NOT NULL, -- Path to stored PDF file
  file_size INTEGER NOT NULL, -- File size in bytes
  stripe_payment_intent_id VARCHAR(255) UNIQUE,
  stripe_checkout_session_id VARCHAR(255) UNIQUE,
  payment_status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'paid', 'failed', 'refunded'
  review_status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'in_review', 'completed', 'cancelled'
  submitted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  payment_completed_at TIMESTAMP,
  review_completed_at TIMESTAMP,
  feedback_delivered_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_resume_submissions_payment_status ON resume_submissions(payment_status);
CREATE INDEX idx_resume_submissions_review_status ON resume_submissions(review_status);
CREATE INDEX idx_resume_submissions_user_email ON resume_submissions(user_email);
CREATE INDEX idx_resume_submissions_stripe_payment_intent ON resume_submissions(stripe_payment_intent_id);
```

### 2. `resume_feedback` Table (Optional)

Stores the feedback provided for each resume review.

```sql
CREATE TABLE resume_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id UUID NOT NULL REFERENCES resume_submissions(id) ON DELETE CASCADE,
  feedback_text TEXT NOT NULL,
  feedback_file_path TEXT, -- Optional: Path to feedback document if provided as file
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_resume_feedback_submission_id ON resume_feedback(submission_id);
```

### 3. `stripe_webhook_events` Table (Recommended)

Stores Stripe webhook events for audit and debugging purposes.

```sql
CREATE TABLE stripe_webhook_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_event_id VARCHAR(255) UNIQUE NOT NULL,
  event_type VARCHAR(100) NOT NULL,
  payment_intent_id VARCHAR(255),
  checkout_session_id VARCHAR(255),
  payload JSONB NOT NULL,
  processed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_stripe_webhook_events_stripe_event_id ON stripe_webhook_events(stripe_event_id);
CREATE INDEX idx_stripe_webhook_events_payment_intent ON stripe_webhook_events(payment_intent_id);
CREATE INDEX idx_stripe_webhook_events_processed ON stripe_webhook_events(processed);
```

## Database Recommendations

### Option 1: PostgreSQL (Recommended)
- **Pros**: Robust, supports JSONB for webhook payloads, excellent for production
- **Cons**: Requires server setup
- **Best for**: Production environments

### Option 2: SQLite
- **Pros**: Easy setup, no server required, good for development
- **Cons**: Limited concurrency, not ideal for production at scale
- **Best for**: Development and small-scale deployments

### Option 3: Supabase (PostgreSQL as a Service)
- **Pros**: Easy setup, built-in authentication, real-time features, free tier
- **Cons**: Vendor lock-in
- **Best for**: Quick deployment, startups

### Option 4: Firebase Firestore
- **Pros**: NoSQL, easy integration, real-time updates
- **Cons**: Different query model, pricing can scale
- **Best for**: If already using Firebase ecosystem

## File Storage Recommendations

### Option 1: AWS S3
- Store PDF files in S3 buckets
- Use pre-signed URLs for secure uploads
- Store file path in database

### Option 2: Cloudinary
- Handles file uploads and transformations
- Good for images and PDFs
- Simple API

### Option 3: Supabase Storage
- If using Supabase for database
- Integrated file storage solution
- Built-in access controls

### Option 4: Local Storage (Development Only)
- Store files in `public/uploads/resumes/` directory
- **NOT recommended for production**

## Backend API Endpoints Needed

1. **POST /api/create-checkout-session**
   - Accepts: FormData with resume file
   - Returns: Stripe Checkout Session ID
   - Creates database record with status 'pending'

2. **POST /api/stripe-webhook**
   - Handles Stripe webhook events
   - Updates payment status when payment succeeds
   - Updates database records accordingly

3. **GET /api/submissions/:id** (Optional - for admin)
   - Returns submission details
   - Protected route for Kasey to view submissions

4. **POST /api/submissions/:id/feedback** (Optional - for admin)
   - Allows Kasey to submit feedback
   - Updates review_status to 'completed'

## Environment Variables Needed

```env
# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# File Storage (if using S3)
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_S3_BUCKET_NAME=...
AWS_REGION=...
```

## Implementation Notes

1. **Payment Flow**:
   - User uploads PDF → File stored temporarily
   - User clicks "Upload & Pay" → Dialog opens
   - User confirms → Backend creates Stripe Checkout Session
   - User redirected to Stripe → Completes payment
   - Stripe webhook confirms payment → File moved to permanent storage
   - Database record updated to 'paid' status

2. **Security Considerations**:
   - Validate file type (PDF only) on both client and server
   - Validate file size (max 5MB)
   - Sanitize file names
   - Use secure file storage with proper access controls
   - Implement rate limiting on upload endpoints
   - Verify Stripe webhook signatures

3. **Email Notifications**:
   - Send confirmation email when payment succeeds
   - Send feedback email when review is completed
   - Consider using services like SendGrid, Resend, or AWS SES

