import React, { useEffect } from 'react';
import { Gift, X, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StripeService } from '../../services/stripe';

interface PaywallOverlayProps {
  onPaymentSuccess: () => void;
}

export function PaywallOverlay({ onPaymentSuccess }: PaywallOverlayProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePaymentSuccess = () => {
      onPaymentSuccess();
    };

    window.addEventListener('stripe-payment-success', handlePaymentSuccess);
    return () => {
      window.removeEventListener('stripe-payment-success', handlePaymentSuccess);
    };
  }, [onPaymentSuccess]);

  const handlePayment = async () => {
    const stripeService = StripeService.getInstance();
    try {
      await stripeService.handlePayment();
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  const handleBackToPackages = () => {
    navigate('/');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackToPackages}
    >
      <div 
        className="max-w-md w-full relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute -top-2 left-0 right-0 flex justify-between items-center">
          <motion.button
            whileHover={{ x: -4 }}
            onClick={handleBackToPackages}
            className="flex items-center gap-2 text-white/90 hover:text-white 
                     transition-colors text-sm font-christmas"
          >
            <ArrowLeft className="w-4 h-4 transition-transform" />
            <span>Explore More Options</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleBackToPackages}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-500/20 p-3 rounded-full">
            <Gift className="w-8 h-8 text-red-500" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white text-center mb-2 font-christmas">
          Special Christmas Call with Santa
        </h3>
        
        <p className="text-white/90 text-center mb-6">
          Make this Christmas extra special with a personal call from Santa Claus himself!
        </p>
        
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl mb-6">
          <div className="text-center">
            <span className="text-3xl font-bold text-white">$10</span>
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
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handlePayment}
          className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-green-500 
                   text-white font-bold rounded-lg shadow-lg shadow-red-500/30 
                   hover:shadow-red-500/50 transition-all duration-300 font-christmas"
        >
          Start Your Magical Call
        </motion.button>
        
        <p className="text-white/60 text-sm text-center mt-4">
          🔒 Secure payment powered by Stripe
        </p>
      </div>
    </div>
  );
}
