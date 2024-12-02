import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { QuickPackageModal } from '../packages/QuickPackageModal';

export function HeroButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowModal(true)}
        className="group relative inline-flex items-center justify-center px-8 py-4 
                 bg-gradient-to-r from-red-500 to-red-600 text-white text-xl 
                 font-bold rounded-full shadow-lg shadow-red-500/30 
                 hover:shadow-red-500/70 transition-all duration-300 
                 font-christmas overflow-hidden w-full sm:w-auto"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative flex items-center gap-2">
          <Gift className="w-6 h-6 animate-bounce" />
          Book Santa Now!
        </span>
      </motion.button>

      <QuickPackageModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        defaultPackage="call"
      />
    </>
  );
}