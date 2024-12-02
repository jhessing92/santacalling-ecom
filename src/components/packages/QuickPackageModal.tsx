import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuickPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: 'call' | 'letter' | 'video' | 'bundle';
}

export function QuickPackageModal({ isOpen, onClose, defaultPackage = 'call' }: QuickPackageModalProps) {
  const navigate = useNavigate();

  const handleStartCall = () => {
    navigate('/santa-call');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Navigation Bar */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center mb-6 px-4">
              <motion.button
                whileHover={{ x: -4 }}
                onClick={onClose}
                className="flex items-center gap-2 text-white/90 hover:text-white 
                         transition-colors text-sm font-christmas"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Explore More Options</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="bg-gradient-to-b from-red-900/90 to-green-900/90 backdrop-blur-md 
                          p-8 rounded-2xl mt-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <Gift className="w-8 h-8 text-red-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-4 font-christmas">
                Special Christmas Call with Santa
              </h3>

              <p className="text-white/90 text-center mb-6">
                Make this Christmas extra special with a personal call from Santa Claus himself!
              </p>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl mb-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-white">$20</span>
                  <span className="text-white/70 ml-2">per minute</span>
                </div>

                <ul className="space-y-3">
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
                onClick={handleStartCall}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}