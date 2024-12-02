import React from 'react';
import { motion } from 'framer-motion';
import { BookingStat } from './BookingStat';
import { UrgencyBanner } from './UrgencyBanner';
import { HeroButton } from './HeroButton';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <UrgencyBanner />
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24 sm:pt-20 sm:pb-32 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 font-christmas text-glow leading-tight"
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto">
          <HeroButton />
          <BookingStat />
        </div>
      </div>
    </div>
  );
}