import React from 'react';
import { Mic } from 'lucide-react';

export function SpeakingIndicator() {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
      <div className="flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full">
        <Mic className="w-4 h-4 text-red-500 animate-pulse" />
        <span className="text-sm text-white">Speaking to Santa...</span>
      </div>
    </div>
  );
}