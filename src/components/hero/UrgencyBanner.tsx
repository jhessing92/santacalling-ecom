import React from 'react';
import { AlertCircle } from 'lucide-react';

export function UrgencyBanner() {
  return (
    <div className="relative py-3">
      <div className="absolute inset-0 bg-white/5" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-white bg-red-500/10 
                      backdrop-blur-sm py-2 px-4 rounded-full border border-red-500/30
                      shadow-lg shadow-red-500/20">
          <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />
          <p className="text-base font-medium">
            Only <span className="font-bold text-red-500">20</span> Santa Call slots remaining for today!
          </p>
        </div>
      </div>
    </div>
  );
}