import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { QuickPackageModal } from '../packages/QuickPackageModal';

export function HeroButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="group relative inline-flex items-center justify-center px-8 py-4 
                   bg-gradient-to-r from-red-500 to-red-600 text-white text-xl 
                   font-bold rounded-full shadow-xl shadow-red-500/50 
                   hover:shadow-red-500/70 transition-all duration-300 
                   font-christmas overflow-hidden border-2 border-red-400/50"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-2">
            <Gift className="w-6 h-6 animate-bounce" />
            Book Santa Now!
          </span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                    text-white/70 text-sm"
        >
          <span className="animate-pulse">3 families are booking right now</span>
        </motion.div>
      </div>

      <QuickPackageModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        defaultPackage="call"
      />
    </>
  );
}