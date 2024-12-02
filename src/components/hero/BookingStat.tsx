import React from 'react';
import { Users } from 'lucide-react';

export function BookingStat() {
  return (
    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm 
                    px-6 py-3 rounded-full text-white/90 border border-white/20">
      <Users className="w-5 h-5 text-red-500" />
      <p className="text-base">
        <span className="font-bold text-red-500">3</span> families are booking right now
      </p>
    </div>
  );
}