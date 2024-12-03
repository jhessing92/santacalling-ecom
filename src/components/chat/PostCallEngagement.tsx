import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Star, Gift } from 'lucide-react';
import { QuickPackageModal } from '../packages/QuickPackageModal';

interface PostCallEngagementProps {
  onClose: () => void;
}

export function PostCallEngagement({ onClose }: PostCallEngagementProps) {
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Magical Call with Santa!',
        text: 'I just had an amazing audio call with Santa Claus! 🎅✨',
        url: window.location.origin
      });
    }
  };

  const handleRate = (value: number) => {
    setRating(value);
    setHasRated(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed inset-x-0 bottom-0 p-4 z-50"
      >
        <div className="max-w-md mx-auto bg-gradient-to-r from-red-900/90 to-green-900/90 
                      backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-red-500/30">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-christmas text-white mb-2">
              Magical Call Complete! ✨
            </h3>
            <p className="text-white/80">
              Share the joy and make more magical memories!
            </p>
          </div>

          {!hasRated ? (
            <div className="mb-6">
              <p className="text-white text-center mb-3">How was your call with Santa?</p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <motion.button
                    key={value}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRate(value)}
                    className={`p-2 rounded-full transition-colors
                              ${value <= rating 
                                ? 'text-yellow-500' 
                                : 'text-white/30 hover:text-yellow-500/50'}`}
                  >
                    <Star className="w-8 h-8 fill-current" />
                  </motion.button>
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-6 text-white"
            >
              <p className="text-yellow-500 font-christmas text-xl">
                Thanks for your feedback! 🌟
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="flex flex-col items-center gap-2 p-4 rounded-xl
                       bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Share2 className="w-6 h-6 text-white" />
              <span className="text-white text-sm font-medium">Share Memory</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPackageModal(true)}
              className="flex flex-col items-center gap-2 p-4 rounded-xl
                       bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Gift className="w-6 h-6 text-white" />
              <span className="text-white text-sm font-medium">More Magic</span>
            </motion.button>
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>

      <QuickPackageModal 
        isOpen={showPackageModal}
        onClose={() => setShowPackageModal(false)}
        defaultPackage="call"
      />
    </AnimatePresence>
  );
}