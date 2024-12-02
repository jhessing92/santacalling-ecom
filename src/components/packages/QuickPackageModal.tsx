import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Gift, Phone, Mail, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PackageOption {
  id: 'call' | 'letter' | 'video' | 'bundle';
  title: string;
  price: number;
  icon: React.ElementType;
  description: string;
  features: string[];
  priceLabel: string;
}

const packageOptions: PackageOption[] = [
  {
    id: 'call',
    title: 'Santa Call',
    price: 20,
    icon: Phone,
    description: 'Live conversation with Santa Claus himself!',
    features: [
      '🎅 Live conversation with Santa',
      '🎄 Share your Christmas wishes',
      '🎁 Personalized experience',
      '⭐ Magical memories'
    ],
    priceLabel: 'per minute'
  },
  {
    id: 'letter',
    title: 'Santa Letter',
    price: 10,
    icon: Mail,
    description: 'Receive a personalized letter from the North Pole!',
    features: [
      '✉️ Handcrafted letter',
      '🎄 Custom details about you',
      '🎁 North Pole stamp',
      '⭐ Keepsake envelope'
    ],
    priceLabel: 'one-time'
  },
  {
    id: 'video',
    title: 'Santa Video',
    price: 10,
    icon: Video,
    description: 'Custom video message from Santa!',
    features: [
      '🎥 Personalized video',
      '🎄 Your name mentioned',
      '🎁 Special message',
      '⭐ Shareable link'
    ],
    priceLabel: 'one-time'
  },
  {
    id: 'bundle',
    title: 'Santa Bundle',
    price: 50,
    icon: Gift,
    description: 'The complete Santa Claus experience!',
    features: [
      '🎅 Live call with Santa',
      '✉️ Personal letter',
      '🎥 Custom video message',
      '⭐ Save $5!'
    ],
    priceLabel: 'for all three'
  }
];

interface QuickPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: 'call' | 'letter' | 'video' | 'bundle';
}

export function QuickPackageModal({ isOpen, onClose, defaultPackage = 'call' }: QuickPackageModalProps) {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = React.useState<PackageOption>(
    packageOptions.find(p => p.id === defaultPackage) || packageOptions[0]
  );

  const handleSelectPackage = (pkg: PackageOption) => {
    setSelectedPackage(pkg);
    navigate(`/santa-${pkg.id}`);
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
            className="relative max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Navigation */}
            <div className="absolute -top-12 left-0 right-0 flex justify-between items-center">
              <motion.button
                whileHover={{ x: -4 }}
                onClick={onClose}
                className="flex items-center gap-2 text-white/90 hover:text-white 
                         transition-colors text-sm font-christmas bg-white/10 
                         backdrop-blur-md px-4 py-2 rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Explore More Options</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors
                         bg-white/10 backdrop-blur-md p-2 rounded-full"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="bg-gradient-to-b from-red-900/90 to-green-900/90 backdrop-blur-md 
                          p-8 rounded-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-500/20 p-3 rounded-full">
                  {React.createElement(selectedPackage.icon, {
                    className: "w-8 h-8 text-red-500"
                  })}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-4 font-christmas">
                {selectedPackage.title}
              </h3>

              <p className="text-white/90 text-center mb-6">
                {selectedPackage.description}
              </p>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl mb-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-white">${selectedPackage.price}</span>
                  <span className="text-white/70 ml-2">{selectedPackage.priceLabel}</span>
                </div>

                <ul className="space-y-3">
                  {selectedPackage.features.map((feature, index) => (
                    <li key={index} className="text-white/80 flex items-center gap-2">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectPackage(selectedPackage)}
                className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-green-500 
                         text-white font-bold rounded-lg shadow-lg shadow-red-500/30 
                         hover:shadow-red-500/50 transition-all duration-300 font-christmas"
              >
                Start Your Magical Experience
              </motion.button>

              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {packageOptions.map((pkg) => (
                  <motion.button
                    key={pkg.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                              ${pkg.id === selectedPackage.id 
                                ? 'bg-red-500 text-white' 
                                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
                  >
                    {pkg.title}
                  </motion.button>
                ))}
              </div>

              <p className="text-white/60 text-sm text-center mt-4">
                🔒 Secure payment powered by Stripe
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}