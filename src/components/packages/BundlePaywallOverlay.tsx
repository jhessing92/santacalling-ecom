import React from 'react';
import { PaymentService } from '../../services/payment';
import { Gift, X } from 'lucide-react';

interface BundlePaywallOverlayProps {
  onClose: () => void;
  onPaymentSuccess: () => void;
}

export function BundlePaywallOverlay({ onClose, onPaymentSuccess }: BundlePaywallOverlayProps) {
  const handlePayment = async () => {
    const paymentService = PaymentService.getInstance();
    const success = await paymentService.processPayment();
    if (success) {
      onPaymentSuccess();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative max-h-[90vh] overflow-y-auto m-4 bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border-2 border-red-500/30 w-full max-w-sm shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-500/20 p-3 rounded-full">
            <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-3 text-glow font-christmas">
          Ultimate Santa Bundle
        </h3>

        <div className="space-y-4 mb-6">
          <p className="text-white/90 text-center text-sm sm:text-base">
            Experience the complete magical Christmas package with all three Santa experiences!
          </p>

          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <h4 className="text-white font-bold mb-1 font-christmas">Santa Audio Call</h4>
              <p className="text-white/80 text-sm">Live conversation with Santa himself</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <h4 className="text-white font-bold mb-1 font-christmas">Santa Letter</h4>
              <p className="text-white/80 text-sm">Personalized letter from the North Pole</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <h4 className="text-white font-bold mb-1 font-christmas">Santa Video</h4>
              <p className="text-white/80 text-sm">30-second custom video message from Santa</p>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="text-center mb-4">
              <div className="inline-block bg-green-500/20 px-3 py-1 rounded-full mb-2">
                <span className="text-green-400 text-sm font-medium">Save $5</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-white font-christmas">$50</span>
                <span className="text-white/70 ml-2 text-sm">for all three</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                '🎅 Live audio call with Santa',
                '✉️ Personalized North Pole letter',
                '🎥 30-second custom video message',
                '🎄 Priority access to all services',
                '⭐ Special bundle-only perks',
                '💝 Save $5 compared to individual purchases'
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
          className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-green-500 text-white 
                   font-bold rounded-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all 
                   duration-300 transform hover:scale-105 font-christmas text-base"
        >
          Get the Complete Santa Experience
        </button>

        <p className="text-white/60 text-xs text-center mt-4">
          🔒 Secure payment powered by Stripe
        </p>
      </div>
    </div>
  );
}