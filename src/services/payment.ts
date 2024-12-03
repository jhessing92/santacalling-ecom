import { loadStripe } from '@stripe/stripe-js';

// const STRIPE_PUBLIC_KEY = 'pk_live_51QReI8CkS8uFBvgAzWsHXXc0NQOY0E9dGLOs0vkcB3BWDNKf4HiB76Xa5axws6sNvkiixtoiSRQyOYaZ3nBiQPh900beTLLflw';
const STRIPE_PUBLIC_KEY = "pk_test_51QReI8CkS8uFBvgAdt5xamaSXCSKAlaOqOIC0r9xiqSwu4WTY73fEONhP48oifnUefdfd5ZHzAH0MajNFmQhskev009lLocI85"
// const PRICE_ID = 'price_1QReI8CkS8uFBvgAzWsHXXc0NQOY'; // Replace with your actual price ID
const PRICE_ID = 'price_1QRxQmCkS8uFBvgAgLKIOYIR'

export class PaymentService {
  private static instance: PaymentService;
  private stripePromise: Promise<any>;

  private constructor() {
    this.stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  }

  public static getInstance(): PaymentService {
    if (!PaymentService.instance) {
      PaymentService.instance = new PaymentService();
    }
    return PaymentService.instance;
  }

  public async redirectToCheckout(): Promise<void> {
    try {
      const stripe = await this.stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: PRICE_ID,
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: `${window.location.origin}/santa-call?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}`,
      });

      if (error) {
        console.error('Error:', error);
        throw new Error(error.message);
      }
    } catch (err) {
      console.error('Failed to redirect to checkout:', err);
      throw err;
    }
  }
}
