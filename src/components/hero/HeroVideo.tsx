import React from 'react';
import { HeroTestimonial } from './HeroTestimonial';

export function HeroVideo() {
  return (
    <div className="relative aspect-[9/16] max-w-[280px] lg:max-w-[400px] mx-auto">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/santa-calls-ffa98.firebasestorage.app/o/Santa%20UGC%20Vids%2F4.mov?alt=media&token=0607054d-6679-4c07-a898-808036290c9b"
        className="w-full h-full object-cover rounded-xl"
        autoPlay
        muted
        loop
        playsInline
      />
      <HeroTestimonial />
    </div>
  );
}