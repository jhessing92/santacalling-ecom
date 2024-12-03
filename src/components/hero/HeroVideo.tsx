import React, { useRef, useEffect, useState } from 'react';
import { HeroTestimonial } from './HeroTestimonial';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  };

  return (
    <div className="relative aspect-[9/16] max-w-[280px] lg:max-w-[400px] mx-auto">
      <video
        ref={videoRef}
        className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleLoadedData}
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      >
        <source 
          src="https://firebasestorage.googleapis.com/v0/b/santa-calls-ffa98.firebasestorage.app/o/Santa%20UGC%20Vids%2F4.mov?alt=media&token=0607054d-6679-4c07-a898-808036290c9b" 
          type="video/mp4" 
        />
      </video>
      <HeroTestimonial />
    </div>
  );
}
