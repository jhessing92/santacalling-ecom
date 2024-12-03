import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Users } from 'lucide-react';
import { QuickPackageModal } from '../packages/QuickPackageModal';


export function HeroHeader() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl font-bold text-white mb-8 font-christmas text-glow leading-tight"
      >
        Bring the Magic of Santa to Your Home
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-christmas"
      >
        Limited Spots Available to Meet Santa This Christmas – Reserve Yours Today!
      </motion.p>

      <div className="flex flex-col items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="group relative inline-flex items-center justify-center px-6 py-3 
                   bg-gradient-to-r from-red-500 to-red-600 text-white 
                   font-bold rounded-full shadow-lg shadow-red-500/30 
                   hover:shadow-red-500/70 transition-all duration-300 
                   font-christmas overflow-hidden w-full sm:w-auto text-lg"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-2">
            <Gift className="w-5 h-5 animate-bounce" />
            Call Santa
          </span>
        </motion.button>

        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm 
                      px-6 py-3 rounded-full text-white/90 border border-white/20
                      w-full sm:w-auto justify-center">
          <Users className="w-5 h-5 text-red-500" />
          <p className="text-base whitespace-nowrap">
            <span className="font-bold text-red-500">3</span> families are booking right now
          </p>
        </div>
      </div>



      <QuickPackageModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        defaultPackage="call"
      />
    </div>
  );
}