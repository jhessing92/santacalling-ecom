import React, { useState } from 'react';
import { ElevenLabsWidget } from '../components/chat/ElevenLabsWidget';
import { PaywallOverlay } from '../components/payment/PaywallOverlay';

export function SantaCallPage() {
  const [hasPaid, setHasPaid] = useState(false);

  const handlePaymentSuccess = () => {
    setHasPaid(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-glow font-christmas">
          Talk to Santa
        </h1>
        <p className="text-white/90 text-sm sm:text-lg">
          Have a magical conversation with Santa Claus!
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border-2 border-red-500/30">
        <div className="relative h-[500px]">
          {!hasPaid ? (
            <PaywallOverlay onPaymentSuccess={handlePaymentSuccess} />
          ) : (
            <ElevenLabsWidget skipPaywall={true} />
          )}
        </div>
      </div>
    </div>
  );
}