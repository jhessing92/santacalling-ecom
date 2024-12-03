import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaywallOverlay } from '../components/payment/PaywallOverlay';
import { CallPreparation } from '../components/chat/CallPreparation';
import { ElevenLabsWidget } from '../components/chat/ElevenLabsWidget'; // Import ElevenLabsWidget

export function SantaCallPage() {
  const navigate = useNavigate();
  const [hasPaid, setHasPaid] = useState(true); // Set to true for testing
  const [isReady, setIsReady] = useState(false);

  const handlePaymentSuccess = () => {
    setHasPaid(true);
  };

  const handleReadyForCall = () => {
    setIsReady(true); // Set isReady to true when the "Call Santa" button is clicked
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto mt-[-10%]">
          {!hasPaid ? (
            <PaywallOverlay onPaymentSuccess={handlePaymentSuccess} />
          ) : !isReady ? (
            <CallPreparation onReady={handleReadyForCall} />
          ) : (
            <ElevenLabsWidget skipPaywall /> // Show ElevenLabsWidget when isReady is true
          )}
        </div>
      </div>
    </div>
  );
}