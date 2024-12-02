import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Gift } from 'lucide-react';

// For demo purposes, we're using a placeholder Stripe public key
const stripePromise = loadStripe('pk_test_demo');

interface PaywallOverlayProps {
  onPaymentSuccess: () => void;
}

export function PaywallOverlay({ onPaymentSuccess }: PaywallOverlayProps) {
  const handlePayment = async () => {
    // For demo purposes, we'll just simulate a successful payment
    setTimeout(() => {
      onPaymentSuccess();
    }, 1000);
  };

  return (
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-red-500/30 max-w-md w-full mx-4 shadow-xl">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-red-500/20 p-3 rounded-full">
            <Gift className="w-8 h-8 text-red-500" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white text-center mb-2 text-glow">
          Special Christmas Call with Santa
        </h3>
        
        <div className="space-y-4 mb-6">
          <p className="text-white/90 text-center">
            Make this Christmas extra special with a personal call from Santa Claus himself!
          </p>
          
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="text-center">
              <span className="text-3xl font-bold text-white">$20</span>
              <span className="text-white/70 ml-2">per minute</span>
            </div>
            <ul className="mt-4 space-y-2">
              {[
                '🎅 Live conversation with Santa',
                '🎄 Share your Christmas wishes',
                '🎁 Personalized experience',
                '⭐ Magical memories'
              ].map((feature, index) => (
                <li key={index} className="text-white/80 flex items-center gap-2">
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <button
          onClick={handlePayment}
          className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-green-500 text-white font-bold rounded-lg 
                   shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 
                   transform hover:scale-105"
        >
          Start Your Magical Call
        </button>
        
        <p className="text-white/60 text-sm text-center mt-4">
          🔒 Secure payment powered by Stripe
        </p>
      </div>
    </div>
  );
}