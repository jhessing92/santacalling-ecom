import { STRIPE_CONFIG } from './constants';
import { PaymentStorage } from './storage';
import { PaymentEvents } from './events';
import { PaymentResult } from './types';

export class StripeService {
  private static instance: StripeService;
  private checkInterval?: number;

  private constructor() {}

  public static getInstance(): StripeService {
    if (!StripeService.instance) {
      StripeService.instance = new StripeService();
    }
    return StripeService.instance;
  }

  public async handlePayment(): Promise<PaymentResult> {
    try {
      const paymentUrl = this.buildPaymentUrl();
      PaymentStorage.setPending();
      
      // Open payment in new window
      window.location.href = paymentUrl;
      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Payment initialization failed';
      PaymentEvents.emitError(errorMessage);
      PaymentStorage.clearPending();
      return { success: false, error: errorMessage };
    }
  }

  private buildPaymentUrl(): string {
    const successUrl = new URL(`${window.location.origin}${STRIPE_CONFIG.SUCCESS_PATH}`);
    successUrl.searchParams.set('success', 'true');
    
    const url = new URL(STRIPE_CONFIG.PAYMENT_LINK);
    url.searchParams.set('success_url', successUrl.toString());
    url.searchParams.set('cancel_url', `${window.location.origin}/santa-call`);
    
    return url.toString();
  }
}
