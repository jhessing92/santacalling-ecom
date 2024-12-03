import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaywallOverlay } from '../components/payment/PaywallOverlay';
import { CallPreparation } from '../components/chat/CallPreparation';
import { usePayment } from '../hooks/usePayment';

export function SantaCallPage() {
  const navigate = useNavigate();
  const [hasPaid, setHasPaid] = useState(false);
  const [isReady, setIsReady] = useState(false);

  usePayment({
    onSuccess: () => setHasPaid(true),
    onError: (error) => console.error('Payment error:', error)
  });

  const handlePaymentSuccess = () => {
    setHasPaid(true);
  };

  const handleReadyForCall = () => {
    setIsReady(true);
    navigate('/chat');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto mt-[-10%]">
          {!hasPaid ? (
            <PaywallOverlay onPaymentSuccess={handlePaymentSuccess} />
          ) : !isReady ? (
            <CallPreparation onReady={handleReadyForCall} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
