import React from 'react';
import { PaymentService } from '../../services/payment';
import { SANTA_CALL_PAYMENT } from '../../config/payment';
import { PaymentHeader } from './PaymentHeader';
import { PaymentFeatures } from './PaymentFeatures';
import { PaymentButton } from './PaymentButton';

interface PaywallOverlayProps {
  onPaymentSuccess: () => void;
}

export function PaywallOverlay({ onPaymentSuccess }: PaywallOverlayProps) {
  const handlePayment = async () => {
    const paymentService = PaymentService.getInstance();
    const success = await paymentService.processPayment();
    if (success) {
      onPaymentSuccess();
    }
  };

  return (
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20 rounded-xl">
      <div className="w-full p-4 space-y-4">
        <PaymentHeader />
        
        <div className="space-y-3">
          <p className="text-white/90 text-center text-sm font-christmas">
            Make this Christmas extra special with a personal call from Santa Claus himself!
          </p>
          
          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
            <div className="text-center mb-2">
              <span className="text-xl font-bold text-white font-christmas">
                ${SANTA_CALL_PAYMENT.price}
              </span>
              <span className="text-white/70 ml-2 text-xs">
                {SANTA_CALL_PAYMENT.interval}
              </span>
            </div>
            <PaymentFeatures features={SANTA_CALL_PAYMENT.features} />
          </div>
        </div>
        
        <PaymentButton onClick={handlePayment}>
          Start Your Magical Call
        </PaymentButton>
        
        <p className="text-white/60 text-xs text-center">
          🔒 Secure payment powered by Stripe
        </p>
      </div>
    </div>
  );
}