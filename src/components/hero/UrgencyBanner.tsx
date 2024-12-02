import React from 'react';
import { AlertCircle } from 'lucide-react';

export function UrgencyBanner() {
  return (
    <div className="relative py-3">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-red-500 animate-gradient-x" />
      <div className="absolute inset-[2px] bg-gradient-to-r from-red-900 via-green-900 to-red-900 backdrop-blur-sm" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-white">
          <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />
          <p className="text-base font-medium">
            Only <span className="font-bold">20</span> Santa Call slots remaining for today!
          </p>
        </div>
      </div>
    </div>
  );
}