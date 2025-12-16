# Stripe Payment Link Setup Guide

## Current Implementation

The Career Support feature now uses your Stripe Payment Link directly, which eliminates the need for a backend to create checkout sessions. This is a simpler approach that works immediately!

## Payment Link

Your current Payment Link: `https://buy.stripe.com/4gMeVcfDZc8U1K02uhawo01`

## Configuration Steps

### 1. Redirect URLs (Automatic)

The code now automatically appends redirect URLs to your Payment Link using query parameters (`success_url` and `cancel_url`). This means:

✅ **No dashboard configuration needed** - Redirects work automatically  
✅ **Works for both development and production** - URLs are generated based on your current domain  
✅ **Dynamic** - Adapts to your environment automatically

**How it works:**
- Success URL: `{your-domain}/career-support?payment=success`
- Cancel URL: `{your-domain}/career-support?payment=canceled`

**Note:** If the query parameter approach doesn't work with your Payment Link, you can also configure redirect URLs in the Stripe Dashboard:

1. Go to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Products** → **Payment Links**
3. Find your payment link
4. Click **Edit** or **Settings**
5. Set the "After payment" URLs to match the format above

### 2. How It Works

1. **User uploads resume** → File and email stored in browser sessionStorage
2. **User clicks "Proceed to Payment"** → Redirects to Stripe Payment Link
3. **User completes payment** → Stripe redirects back to your success URL
4. **Success page loads** → Retrieves file from sessionStorage and uploads to backend (when implemented)

### 3. File Storage

Currently, the file is stored in the browser's `sessionStorage` as base64 data. This is temporary and will be cleared when:
- The browser tab is closed
- The user navigates away and the session expires
- The payment is completed (file is then uploaded to backend)

### 4. Next Steps for Full Implementation

To complete the flow, you'll need to:

1. **Set up file storage** (AWS S3, Cloudinary, Supabase Storage, etc.)
2. **Create backend endpoint** `/api/upload-resume` to:
   - Accept the file upload
   - Store it in your file storage service
   - Save submission record to database
   - Send confirmation email
3. **Implement webhook handler** (optional but recommended):
   - Listen for Stripe webhook events
   - Verify payment status
   - Update database records

### 5. Testing

1. Use Stripe test mode for testing
2. Test card: `4242 4242 4242 4242`
3. Any future expiry date and any 3-digit CVC
4. Test the complete flow:
   - Upload PDF
   - Enter email
   - Click "Proceed to Payment"
   - Complete payment on Stripe
   - Verify redirect back to your site
   - Check that success message appears

### 6. Production Considerations

- **HTTPS Required**: Payment Links require HTTPS in production
- **Domain Configuration**: Update success/cancel URLs to your production domain
- **File Upload**: Implement the `uploadResumeToBackend` function in `src/lib/resumeUpload.ts`
- **Email Notifications**: Set up email service to notify users and yourself
- **Database**: Store submissions in database for tracking and review

## Advantages of Payment Links

✅ **No backend required** for payment processing  
✅ **Simple setup** - just configure URLs  
✅ **Secure** - Stripe handles all payment security  
✅ **Mobile-friendly** - Works on all devices  
✅ **Automatic receipts** - Stripe sends receipts automatically  

## Limitations

⚠️ **File upload still needs backend** - Currently files are stored temporarily in browser  
⚠️ **Less customization** - Payment Links have limited customization compared to Checkout Sessions  
⚠️ **Metadata handling** - Limited ability to pass custom metadata (though you can use client_reference_id)

## Alternative: Full Checkout Session (More Control)

If you need more control over the payment flow, you can switch back to using Checkout Sessions. This requires:
- Backend endpoint to create sessions
- More setup but more flexibility
- See `BACKEND_EXAMPLE.md` for implementation

## Support

- [Stripe Payment Links Documentation](https://stripe.com/docs/payments/payment-links)
- [Stripe Dashboard](https://dashboard.stripe.com)

