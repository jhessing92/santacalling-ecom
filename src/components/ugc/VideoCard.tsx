import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Volume2, VolumeX } from 'lucide-react';
import { QuickPackageModal } from '../packages/QuickPackageModal';

interface Video {
  id: string;
  url: string;
  username: string;
  reactions: { hearts: number; likes: string };
  product: string;
  caption: string;
}

interface VideoCardProps {
  video: Video;
  isActive: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export function VideoCard({ video, isActive, onNext, onPrev }: VideoCardProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number>(0);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay failed, user needs to interact first
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
  };

  return (
    <>
      <div 
        className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <video
          ref={videoRef}
          src={video.url}
          className="absolute inset-0 w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

        {/* Username */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
            <p className="text-white text-sm font-medium">{video.username}</p>
          </div>

          {/* Mute toggle with visual indicator */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="relative group"
          >
            <div className="bg-black/50 backdrop-blur-md p-2 rounded-full">
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/75 px-2 py-1 
                          rounded text-xs text-white whitespace-nowrap opacity-0 
                          group-hover:opacity-100 transition-opacity">
              {isMuted ? 'Unmute video' : 'Mute video'}
            </div>
          </motion.button>
        </div>

        {/* Caption and CTA */}
        <div className="absolute bottom-4 left-4 right-4 space-y-3">
          <p className="text-white text-sm line-clamp-2 font-medium bg-black/50 
                       backdrop-blur-md p-2 rounded-lg">
            {video.caption}
          </p>
          
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 bg-red-500 hover:bg-red-600 
                       transition-colors px-4 py-2 rounded-full"
            >
              <Heart className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                {video.reactions.hearts}
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-red-500 to-green-500 
                       text-white text-sm font-bold px-4 py-2 rounded-full 
                       shadow-lg shadow-red-500/30 hover:shadow-red-500/50 
                       transition-all duration-300"
            >
              Book Now
            </motion.button>
          </div>
        </div>

        {!isActive && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        )}
      </div>

      <QuickPackageModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        defaultPackage="call"
      />
    </>
  );
}