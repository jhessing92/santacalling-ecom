import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { PackageFeatures } from './PackageFeatures';
import { motion, AnimatePresence } from 'framer-motion';
import { QuickPackageModal } from './QuickPackageModal';

interface PackageCardProps {
  id: string;
  title: string;
  price: number;
  icon: LucideIcon;
  description: string;
  features: string[];
  onSelect: () => void;
  ctaText: string;
  highlight?: boolean;
}

export function PackageCard({
  id,
  title,
  price,
  icon: Icon,
  description,
  features,
  onSelect,
  ctaText,
  highlight
}: PackageCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const priceDisplay = title === 'Santa Letter' || title === 'Santa Bundle' ? price : `${price}/min`;

  const handleClick = () => {
    if (id === 'bundle') {
      onSelect();
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {highlight && (
          <motion.div
            className="absolute -top-6 left-1/2 -translate-x-1/2 z-10"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="bg-red-500 text-white px-4 py-1 rounded-full 
                          font-christmas text-sm shadow-lg shadow-red-500/30
                          border-2 border-red-400/50 whitespace-nowrap">
              Most Value
            </div>
          </motion.div>
        )}

        <div 
          className={`
            relative bg-white/10 backdrop-blur-md rounded-xl border-2
            transition-all duration-300 overflow-hidden h-[340px] sm:h-[360px]
            ${isHovered ? 'border-red-500 shadow-lg shadow-red-500/30 scale-[1.02] z-10' : 'border-red-500/30'}
            ${highlight ? 'border-red-500/50 shadow-md shadow-red-500/20' : ''}
          `}
        >
          <div className="p-4 sm:p-6 flex flex-col h-full">
            <div className="flex flex-col items-center flex-grow">
              <div className={`
                p-3 sm:p-4 rounded-full mb-3 sm:mb-4 transition-colors
                ${isHovered ? 'bg-red-500/30' : 'bg-red-500/20'}
              `}>
                <Icon className="w-8 h-8 sm:w-12 sm:h-12 text-red-500" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-2 sm:mb-3 font-christmas">
                {title}
              </h3>
              
              <button
                onClick={handleClick}
                className="w-full py-1.5 sm:py-2 px-3 sm:px-4 bg-gradient-to-r from-red-500 to-green-500 
                         text-white font-bold rounded-lg shadow-lg shadow-red-500/30 
                         hover:shadow-red-500/50 transition-all duration-300 mb-3 sm:mb-4
                         transform hover:scale-105 font-christmas text-sm sm:text-base"
              >
                {ctaText} — ${priceDisplay}
              </button>

              <p className="text-white/80 text-center text-xs sm:text-sm">
                {description}
              </p>
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 right-0 bottom-0 bg-black/90 backdrop-blur-md
                           border-t border-red-500/30 p-3 sm:p-4 rounded-b-xl"
                >
                  <PackageFeatures features={features} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <QuickPackageModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        defaultPackage={id as 'call' | 'letter' | 'video' | 'bundle'}
      />
    </>
  );
}