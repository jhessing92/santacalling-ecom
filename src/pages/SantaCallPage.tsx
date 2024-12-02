import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ElevenLabsWidget } from '../components/chat/ElevenLabsWidget';
import { PaywallOverlay } from '../components/payment/PaywallOverlay';
import { CallPreparation } from '../components/chat/CallPreparation';

export function SantaCallPage() {
  const [hasPaid, setHasPaid] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  const handlePaymentSuccess = () => {
    setHasPaid(true);
  };

  const handleReadyForCall = () => {
    setIsReady(true);
    setShowWidget(true);
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
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-full h-[500px]">
                <ElevenLabsWidget skipPaywall={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}