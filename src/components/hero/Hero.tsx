import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Users } from 'lucide-react';
import { QuickPackageModal } from '../packages/QuickPackageModal';
import { HeroFeatures } from './HeroFeatures';
import { HeroVideo } from './HeroVideo';

// Rest of the Hero component code remains the same...


export function Hero() {
  const [showModal, setShowModal] = useState(false);

  const giftAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24 sm:pt-20 sm:pb-32 text-center">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-8 font-christmas text-glow leading-tight"
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
                <motion.span variants={giftAnimation} initial="initial" animate="animate">
                  <Gift className="w-5 h-5" />
                </motion.span>
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

          <HeroVideo />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl font-bold text-white mb-8 font-christmas text-glow leading-tight"
            >
              Bring the Magic of Santa to Your Home
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl font-christmas"
            >
              Limited Spots Available to Meet Santa This Christmas – Reserve Yours Today!
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
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
                  <motion.span variants={giftAnimation} initial="initial" animate="animate">
                    <Gift className="w-5 h-5" />
                  </motion.span>
                  Call Santa
                </span>
              </motion.button>

              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm 
                            px-6 py-3 rounded-full text-white/90 border border-white/20">
                <Users className="w-5 h-5 text-red-500" />
                <p className="text-base whitespace-nowrap">
                  <span className="font-bold text-red-500">3</span> families are booking right now
                </p>
              </div>
            </div>
          </div>

          <HeroVideo />
        </div>

        {/* Features Section */}
        <div className="relative mt-24 sm:mt-32 lg:mt-40">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-christmas text-glow">
                The Magic of Santa, Made Simple
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-christmas">
                Experience the joy of Christmas with our secure and personalized Santa calls
              </p>
            </div>

            <HeroFeatures />
          </div>
        </div>

        <QuickPackageModal 
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          defaultPackage="call"
        />
      </div>
    </div>
  );
}
