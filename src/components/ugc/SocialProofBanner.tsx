import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export function SocialProofBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 
                to-green-500 text-white py-4 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <p className="text-lg font-christmas">
          Ready to create magical moments like this?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-2 bg-white text-red-500 
                   rounded-full font-bold shadow-lg hover:shadow-xl 
                   transition-shadow duration-300"
        >
          <Gift className="w-5 h-5" />
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}