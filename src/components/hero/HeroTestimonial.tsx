import React from 'react';
import { Star } from 'lucide-react';

export function HeroTestimonial() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-t from-black/80 
                    via-black/50 to-transparent px-4 py-6 backdrop-blur-sm">
      <div className="max-w-[90%] mx-auto">
        <div className="flex gap-1 mb-2 justify-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <p className="text-white text-sm italic mb-2 text-center leading-snug">
          "The joy on my daughter's face when Santa knew her name and favorite toy was priceless! Best Christmas surprise ever!"
        </p>
        <p className="text-white/70 text-xs text-center font-medium">
          - Sarah M., Mom of 2
        </p>
      </div>
    </div>
  );
}