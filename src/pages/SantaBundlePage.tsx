import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PopupButton } from '@typeform/embed-react';
import { ElevenLabsWidget } from '../components/chat/ElevenLabsWidget';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function SantaBundlePage() {
  const navigate = useNavigate();
  const [showWidget, setShowWidget] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const hasAccess = localStorage.getItem('santa_bundle_access') === 'true';
    if (!hasAccess) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-glow font-christmas">
          Your Complete Santa Experience
        </h1>
        <p className="text-white/90 text-sm sm:text-lg">
          All your magical Christmas experiences in one place!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
        {/* Santa Call Section */}
        <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border-2 border-red-500/30 relative">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-glow font-christmas">
            Talk to Santa
          </h2>
          
          <AnimatePresence>
            {!showWidget ? (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowWidget(true)}
                className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-red-500 to-green-500 
                         text-white font-bold rounded-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 
                         transition-all duration-300 transform hover:scale-105 font-christmas mb-4 text-sm sm:text-base"
              >
                Start Your Call with Santa
              </motion.button>
            ) : (
              <motion.div
                initial={{ height: 300 }}
                animate={{ height: isExpanded ? 500 : 300 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <ElevenLabsWidget skipPaywall={true} />
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="absolute bottom-3 right-3 p-1.5 rounded-full bg-red-500/20 
                           hover:bg-red-500/30 transition-colors z-10"
                  aria-label={isExpanded ? 'Show less' : 'Show more'}
                >
                  {isExpanded ? (
                    <Minus className="w-4 h-4 text-red-500" />
                  ) : (
                    <Plus className="w-4 h-4 text-red-500" />
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Letter & Video Form Section */}
        <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border-2 border-red-500/30">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-glow font-christmas">
            Your Letter & Video Details
          </h2>
          <div className="aspect-[3/4] w-full">
            <PopupButton 
              id="xxxxxxxxxxx"
              className="w-full h-full bg-gradient-to-r from-red-500 to-green-500 text-white font-bold 
                        rounded-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all 
                        duration-300 transform hover:scale-105 p-4 font-christmas text-sm sm:text-base"
            >
              Enter Your Details for Letter & Video
            </PopupButton>
          </div>
          <p className="text-white/70 text-xs sm:text-sm mt-4 text-center">
            Fill out this form once to receive both your personalized letter and video from Santa!
          </p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border-2 border-red-500/30 mx-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-glow text-center font-christmas">
          What Happens Next?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl mb-2">📞</div>
            <h3 className="text-white font-bold mb-2 font-christmas">Santa Call</h3>
            <p className="text-white/80 text-sm">Available immediately! Click the button above to speak with Santa.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl mb-2">✉️</div>
            <h3 className="text-white font-bold mb-2 font-christmas">Santa Letter</h3>
            <p className="text-white/80 text-sm">Your personalized letter will arrive within 48 hours.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl mb-2">🎥</div>
            <h3 className="text-white font-bold mb-2 font-christmas">Santa Video</h3>
            <p className="text-white/80 text-sm">Your custom video will be ready within 72 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}