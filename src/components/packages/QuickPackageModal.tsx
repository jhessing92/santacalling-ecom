import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Phone, Calendar, Clock, Sparkles } from 'lucide-react';
import { CalendlyScheduler } from '../calendar/CalendlyScheduler';

interface QuickPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: 'call';
}

export function QuickPackageModal({ isOpen, onClose }: QuickPackageModalProps) {
  const navigate = useNavigate();
  const [showScheduler, setShowScheduler] = useState(false);

  const handleCallNow = () => {
    navigate('/santa-call');
    onClose();
  };

  const handleScheduled = (eventUri: string) => {
    console.log('Scheduled event:', eventUri);
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
            className="relative w-full max-w-sm bg-gradient-to-b from-red-900/90 to-green-900/90 
                      backdrop-blur-md p-6 rounded-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Navigation */}
            <div className="absolute -top-12 left-0 right-0 flex justify-between items-center">
              <motion.button
                whileHover={{ x: -4 }}
                onClick={() => {
                  if (showScheduler) {
                    setShowScheduler(false);
                  } else {
                    onClose();
                  }
                }}
                className="flex items-center gap-2 text-white/90 hover:text-white 
                         transition-colors text-sm font-christmas"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{showScheduler ? 'Back to Options' : 'Back to Magic'}</span>
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

            {showScheduler ? (
              <CalendlyScheduler 
                onScheduled={handleScheduled}
                onBack={() => setShowScheduler(false)}
              />
            ) : (
              <>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-red-500/20 p-3 rounded-full">
                    <Phone className="w-8 h-8 text-red-500" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white text-center mb-3 font-christmas">
                  Talk to Santa Claus
                </h3>

                <p className="text-white/90 text-center mb-4">
                  Make this Christmas magical with a personal audio call from Santa himself!
                </p>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl mb-6">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-green-500/20 px-3 py-1 rounded-full mb-2">
                      <span className="text-green-400 text-sm font-medium">Special Holiday Price</span>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-white">$10</span>
                      <span className="text-white/70 ml-2">for a personalized 60-second audio call</span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-lg">
                    {[
                      '🎅 Live audio chat with Santa',
                      '🎄 Share your Christmas wishes',
                      '🎁 Interactive conversation',
                      '⭐ Magical memories'
                    ].map((feature, index) => (
                      <li key={index} className="text-white/90 flex items-center gap-2">
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCallNow}
                    className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-green-500 
                             text-white font-bold rounded-lg shadow-lg shadow-red-500/30 
                             hover:shadow-red-500/50 transition-all duration-300 font-christmas text-lg"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Start Your Magical Experience
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowScheduler(true)}
                    className="w-full py-3 px-6 bg-white/10 hover:bg-white/20
                             text-white font-bold rounded-lg transition-all duration-300 
                             font-christmas text-lg"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Schedule for Later
                    </div>
                  </motion.button>
                </div>

                <p className="text-white/60 text-sm text-center mt-4">
                  🔒 Secure payment powered by Stripe
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}