import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { QuickPackageModal } from '../packages/QuickPackageModal';

export function SocialProofBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 
                  to-green-500 text-white py-3 sm:py-4 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center 
                      justify-between gap-3 sm:gap-0">
          <p className="text-base sm:text-lg font-christmas text-center sm:text-left">
            Ready to create magical moments like this?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-white 
                     text-red-500 rounded-full font-bold shadow-lg hover:shadow-xl 
                     transition-shadow duration-300 text-sm sm:text-base whitespace-nowrap"
          >
            <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
            Book Your Call
          </motion.button>
        </div>
      </motion.div>

      <QuickPackageModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        defaultPackage="call"
      />
    </>
  );
}