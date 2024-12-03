export const PaymentEvents = {
  success: 'stripe-payment-success',
  error: 'stripe-payment-error',

  emitSuccess: () => {
    window.dispatchEvent(new CustomEvent('stripe-payment-success'));
  },

  emitError: (error: string) => {
    window.dispatchEvent(new CustomEvent('stripe-payment-error', { detail: { error } }));
  },

  onSuccess: (callback: () => void) => {
    window.addEventListener('stripe-payment-success', callback);
    return () => window.removeEventListener('stripe-payment-success', callback);
  },

  onError: (callback: (error: string) => void) => {
    const handler = (event: CustomEvent) => callback(event.detail?.error);
    window.addEventListener('stripe-payment-error', handler as EventListener);
    return () => window.removeEventListener('stripe-payment-error', handler as EventListener);
  }
};
