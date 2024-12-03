import { loadStripe } from '@stripe/stripe-js';

// const STRIPE_PUBLIC_KEY = 'pk_live_51QReI8CkS8uFBvgAzWsHXXc0NQOY0E9dGLOs0vkcB3BWDNKf4HiB76Xa5axws6sNvkiixtoiSRQyOYaZ3nBiQPh900beTLLflw';
const STRIPE_PUBLIC_KEY = "pk_test_51QReI8CkS8uFBvgAdt5xamaSXCSKAlaOqOIC0r9xiqSwu4WTY73fEONhP48oifnUefdfd5ZHzAH0MajNFmQhskev009lLocI85"
// const PAYMENT_LINK = 'https://buy.stripe.com/eVaaIB6OP0WFdigaEE';
const PAYMENT_LINK = 'https://buy.stripe.com/test_28o4gLfwt690czSaEE'

export class StripeService {
  private static instance: StripeService;
  private successUrl: string;

  private constructor() {
    this.successUrl = `${window.location.origin}/chat`;
  }

  public static getInstance(): StripeService {
    if (!StripeService.instance) {
      StripeService.instance = new StripeService();
    }
    return StripeService.instance;
  }

  public async handlePayment(): Promise<void> {
    try {
      // Add success parameter to payment link
      const paymentUrl = new URL(PAYMENT_LINK);
      paymentUrl.searchParams.append('success_url', this.successUrl);
      
      // Store payment intent in localStorage
      localStorage.setItem('payment_pending', 'true');
      
      // Open payment in new tab
      const newWindow = window.open(paymentUrl.toString(), '_blank', 'noopener,noreferrer');
      if (newWindow) {
        newWindow.opener = null;
      }

      // Start checking for success URL
      this.startSuccessCheck();
    } catch (error) {
      console.error('Payment failed:', error);
      throw error;
    }
  }

  private startSuccessCheck() {
    const checkSuccess = () => {
      if (window.location.pathname === '/chat' && localStorage.getItem('payment_pending') === 'true') {
        localStorage.removeItem('payment_pending');
        window.dispatchEvent(new CustomEvent('stripe-payment-success'));
        return true;
      }
      return false;
    };

    // Check every second for 5 minutes
    let attempts = 0;
    const maxAttempts = 300;
    
    const checkInterval = setInterval(() => {
      attempts++;
      const success = checkSuccess();
      
      if (success || attempts >= maxAttempts) {
        clearInterval(checkInterval);
      }
    }, 1000);
  }
}
