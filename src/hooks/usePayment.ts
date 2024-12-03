import { useEffect } from 'react';
import { PaymentEvents } from '../services/payment/events';

interface UsePaymentProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function usePayment({ onSuccess, onError }: UsePaymentProps = {}) {
  useEffect(() => {
    const cleanupSuccess = onSuccess ? PaymentEvents.onSuccess(onSuccess) : undefined;
    const cleanupError = onError ? PaymentEvents.onError(onError) : undefined;

    return () => {
      cleanupSuccess?.();
      cleanupError?.();
    };
  }, [onSuccess, onError]);
}
