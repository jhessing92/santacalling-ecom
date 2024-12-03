import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroTestimonial } from './HeroTestimonial';
import { HeroFeatures } from './HeroFeatures';
import { UrgencyBanner } from './UrgencyBanner';
import { QuickPackageModal } from '../packages/QuickPackageModal';

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start playing video as soon as it's loaded
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, we'll keep the video muted
        console.log('Autoplay failed, video remains muted');
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  };

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
      <UrgencyBanner />
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24 sm:pt-20 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 font-christmas text-glow leading-tight text-center lg:hidden">
            Bring the Magic of Santa to Your Home
          </h1>

          <div className="relative order-1 lg:order-2">
            <div className="max-w-[340px] mx-auto">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl relative">
                {!isVideoLoaded && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20">
                    <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onLoadedData={handleVideoLoad}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isVideoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                >
                  <source 
                    src="https://firebasestorage.googleapis.com/v0/b/santa-calls-ffa98.firebasestorage.app/o/Santa%20UGC%20Vids%2F4.mov?alt=media&token=0607054d-6679-4c07-a898-808036290c9b" 
                    type="video/mp4" 
                  />
                </video>

                <button
                  onClick={toggleMute}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full
                           hover:bg-black/70 transition-colors z-30"
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-white" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white" />
                  )}
                </button>

                <div className="absolute top-4 left-4 w-12 h-12 rounded-full border-2 border-red-500 overflow-hidden z-30">
                  <div className="w-full h-full bg-red-500 flex items-center justify-center">
                    <span className="text-2xl">🎅</span>
                  </div>
                </div>

                <div className="absolute inset-0 z-30">
                  <HeroTestimonial />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Desktop Title */}
            <h1 className="hidden lg:block text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 font-christmas text-glow leading-tight">
              Bring the Magic of Santa to Your Home
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-christmas">
              Limited Spots Available to Meet Santa This Christmas – Reserve Yours Today!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(true)}
                className="group relative inline-flex items-center justify-center px-6 py-3 
                         bg-gradient-to-r from-red-500 to-red-600 text-white 
                         font-bold rounded-full shadow-lg shadow-red-500/30 
                         hover:shadow-red-500/70 transition-all duration-300 
                         font-christmas overflow-hidden w-full sm:w-auto text-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  <motion.span
                    variants={giftAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    <Gift className="w-5 h-5" />
                  </motion.span>
                  Call Santa
                </span>
              </motion.button>

              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm 
                            px-6 py-3 rounded-full text-white/90 border border-white/20
                            w-full sm:w-auto justify-center">
                <span className="animate-pulse text-red-500">●</span>
                <p className="text-base whitespace-nowrap">
                  <span className="font-bold text-red-500">3</span> families are booking right now
                </p>
              </div>
            </div>
          </div>
        </div>

        <HeroFeatures />
      </div>

      <QuickPackageModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        defaultPackage="call"
      />
    </div>
  );
}
