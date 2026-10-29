import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
  submitResume,
  savePendingSubmission,
  readPendingSubmission,
  clearPendingSubmission,
} from '@/lib/resumeUpload';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Upload, FileText, Coffee, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';

interface PaymentFormProps {
  file: File;
  email: string;
  onCancel: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ file, email, onCancel }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadFailed, setUploadFailed] = useState(false);

  // Stripe Payment Link
  // Redirect URLs are automatically appended as query parameters
  // If redirects don't work, configure them in Stripe Dashboard → Payment Links → Settings
  const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/4gMeVcfDZc8U1K02uhawo01';

  const redirectToStripe = () => {
    // Use the current origin to ensure we're on the same domain
    const basePath = window.location.origin.replace(/\/$/, '');
    const successUrl = `${basePath}/career-support?payment=success`;
    const cancelUrl = `${basePath}/career-support?payment=canceled`;

    const paymentUrl = new URL(STRIPE_PAYMENT_LINK);
    paymentUrl.searchParams.set('success_url', encodeURIComponent(successUrl));
    paymentUrl.searchParams.set('cancel_url', encodeURIComponent(cancelUrl));
    paymentUrl.searchParams.set('prefilled_email', email);
    window.location.href = paymentUrl.toString();
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      // Upload the resume and notify Kasey BEFORE redirecting to Stripe,
      // so the submission is safe even if the redirect back never happens.
      const result = await submitResume(file, email);
      savePendingSubmission({
        email,
        fileName: file.name,
        uploaded: true,
        notified: result.notified,
        blobUrl: result.blobUrl,
        timestamp: Date.now(),
      });
      redirectToStripe();
    } catch (err) {
      console.error('Resume upload failed:', err);
      setUploadFailed(true);
      setError(
        "We couldn't upload your resume. Please try again — or continue to payment and email your resume to kaseykungfu@gmail.com afterwards."
      );
      setIsProcessing(false);
    }
  };

  const handlePayWithoutUpload = () => {
    savePendingSubmission({
      email,
      fileName: file.name,
      uploaded: false,
      notified: false,
      timestamp: Date.now(),
    });
    redirectToStripe();
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-muted rounded-lg">
        <p className="text-sm font-medium mb-1">Resume: {file.name}</p>
        <p className="text-2xl font-bold text-portfolio-accent">$5.00</p>
        <p className="text-xs text-muted-foreground mt-1">
          You'll be redirected to Stripe to complete your payment securely.
        </p>
      </div>
      {error && (
        <div className="text-sm text-red-500 p-2 bg-red-50 rounded">{error}</div>
      )}
      <div className="flex gap-2 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isProcessing}
          className="flex-1"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={handlePayment}
          disabled={isProcessing}
          className="flex-1"
        >
          {isProcessing
            ? 'Uploading resume...'
            : uploadFailed
              ? 'Retry Upload & Pay'
              : 'Proceed to Payment'}
        </Button>
      </div>
      {uploadFailed && (
        <Button
          type="button"
          variant="ghost"
          onClick={handlePayWithoutUpload}
          disabled={isProcessing}
          className="w-full text-muted-foreground"
        >
          Pay anyway — I'll email my resume afterwards
        </Button>
      )}
    </div>
  );
};

const CareerSupport = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  // Whether the resume was actually uploaded before payment — the success
  // copy must not claim receipt when the upload failed or state was lost.
  const [resumeReceived, setResumeReceived] = useState(false);

  // Handle Stripe Payment Link redirect
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get('payment');

    if (paymentStatus === 'success') {
      // The resume (if upload succeeded) was already stored and Kasey
      // notified before the Stripe redirect; here we only decide which
      // confirmation message to show.
      const pending = readPendingSubmission();
      setResumeReceived(Boolean(pending?.uploaded));
      setPaymentComplete(true);
      setIsPaymentDialogOpen(false);
      clearPendingSubmission();
      // Clear URL params
      window.history.replaceState({}, '', '/career-support');
    }

    if (paymentStatus === 'canceled') {
      setIsPaymentDialogOpen(false);
      clearPendingSubmission();
      // Clear URL params
      window.history.replaceState({}, '', '/career-support');
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file only.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size must be less than 5MB.');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUploadClick = () => {
    if (!selectedFile) {
      alert('Please select a PDF file first.');
      return;
    }
    if (!userEmail || !userEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    setIsPaymentDialogOpen(true);
  };

  const handlePaymentCancel = () => {
    setIsPaymentDialogOpen(false);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        <section className="py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">
              Kasey's Career Support
            </h1>
            <p className="text-lg text-portfolio-text/80 max-w-2xl mx-auto mb-12 text-center">
              Get professional resume feedback from an experienced product manager. 
              Receive detailed, actionable feedback within 5 business days.
            </p>

            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <Card>
                <CardHeader>
                  <Coffee className="h-8 w-8 text-portfolio-accent mb-2" />
                  <CardTitle className="text-xl">Buy Kasey a Coffee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-portfolio-accent">$5</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    One-time payment for resume review
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-portfolio-accent mb-2" />
                  <CardTitle className="text-xl">5 Business Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You'll receive detailed feedback within 5 business days of payment
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-portfolio-accent mb-2" />
                  <CardTitle className="text-xl">PDF Format</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Upload your resume in PDF format (max 5MB)
                  </p>
                </CardContent>
              </Card>
            </div>

            {paymentComplete ? (
              resumeReceived ? (
                <Card className="border-green-500 bg-green-50/50 dark:bg-green-950/20">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                      <CardTitle className="text-green-700 dark:text-green-400">Payment Successful!</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg font-medium text-portfolio-text">
                      Thank you for your payment!
                    </p>
                    <p className="text-muted-foreground">
                      Your resume has been received successfully. Kasey will reach out to you within 5 business days
                      with detailed feedback on your resume. You'll receive the review via email at the address you provided.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      We appreciate your trust in our career support services!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-amber-500 bg-amber-50/50 dark:bg-amber-950/20">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-amber-500" />
                      <CardTitle className="text-amber-700 dark:text-amber-400">
                        Payment successful — one more step
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg font-medium text-portfolio-text">
                      Thank you for your payment!
                    </p>
                    <p className="text-muted-foreground">
                      However, we didn't receive your resume file. To get your review started, please
                      email your resume (PDF) to{' '}
                      <a
                        href="mailto:kaseykungfu@gmail.com?subject=Resume%20review%20submission"
                        className="font-medium text-portfolio-accent underline"
                      >
                        kaseykungfu@gmail.com
                      </a>{' '}
                      from the same email address you used at checkout, so Kasey can match it to your payment.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Once your resume arrives, you'll receive detailed feedback within 5 business days.
                    </p>
                  </CardContent>
                </Card>
              )
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Upload Your Resume</CardTitle>
                  <CardDescription>
                    Select your PDF resume file to begin the review process
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-email">Email Address</Label>
                    <Input
                      id="user-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      We'll send your feedback to this email address
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resume-upload">Resume (PDF only)</Label>
                    <Input
                      id="resume-upload"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                    {selectedFile && (
                      <p className="text-sm text-muted-foreground">
                        Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
                      </p>
                    )}
                  </div>

                  <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        onClick={handleUploadClick}
                        disabled={!selectedFile}
                        className="w-full"
                        size="lg"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload & Pay $5
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Complete Payment</DialogTitle>
                        <DialogDescription>
                          Please complete your payment of $5.00 to proceed with the resume review.
                        </DialogDescription>
                      </DialogHeader>
                      {selectedFile && (
                        <PaymentForm
                          file={selectedFile}
                          email={userEmail}
                          onCancel={handlePaymentCancel}
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            )}

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-portfolio-accent mt-0.5 flex-shrink-0" />
                    <span>Detailed feedback on formatting, content, and structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-portfolio-accent mt-0.5 flex-shrink-0" />
                    <span>Actionable suggestions for improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-portfolio-accent mt-0.5 flex-shrink-0" />
                    <span>Industry-specific insights from a product management perspective</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-portfolio-accent mt-0.5 flex-shrink-0" />
                    <span>Feedback delivered via email within 5 business days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareerSupport;

