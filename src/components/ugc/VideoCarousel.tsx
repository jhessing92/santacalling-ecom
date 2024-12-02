import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoCard } from './VideoCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: string;
  url: string;
  username: string;
  reactions: { hearts: number; likes: string };
  product: string;
  caption: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

export function VideoCarousel({ videos }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with second video
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      y: 0,
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 2,
      rotateY: 0,
    },
    left: {
      x: -300,
      y: 0,
      scale: 0.8,
      opacity: 0.3,
      zIndex: 1,
      rotateY: 15,
    },
    right: {
      x: 300,
      y: 0,
      scale: 0.8,
      opacity: 0.3,
      zIndex: 1,
      rotateY: -15,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      y: 0,
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = videos.length - 1;
      if (nextIndex >= videos.length) nextIndex = 0;
      return nextIndex;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Auto-advance every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, isTransitioning]);

  const getPosition = (index: number) => {
    if (index === currentIndex) return "center";
    if (
      index === (currentIndex - 1 + videos.length) % videos.length
    ) return "left";
    if (
      index === (currentIndex + 1) % videos.length
    ) return "right";
    return "enter";
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center perspective">
      <div className="relative w-[340px] h-[600px]">
        <AnimatePresence initial={false} custom={direction}>
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              custom={direction}
              variants={slideVariants}
              initial={false}
              animate={getPosition(index)}
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
                rotateY: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className={`absolute top-0 w-full ${
                index === currentIndex ? 'cursor-grab active:cursor-grabbing' : ''
              }`}
              style={{
                pointerEvents: index === currentIndex ? 'auto' : 'none',
                transformStyle: 'preserve-3d',
              }}
            >
              <VideoCard 
                video={video} 
                isActive={index === currentIndex}
                onNext={() => paginate(1)}
                onPrev={() => paginate(-1)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md
                   p-3 rounded-full hover:bg-white/20 transition-colors z-10
                   disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => paginate(-1)}
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md
                   p-3 rounded-full hover:bg-white/20 transition-colors z-10
                   disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => paginate(1)}
        disabled={isTransitioning}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}