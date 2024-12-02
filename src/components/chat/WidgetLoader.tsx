import React from 'react';
import { Loader2 } from 'lucide-react';

export function WidgetLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-30">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
        <p className="text-white text-sm">Loading Santa's workshop...</p>
      </div>
    </div>
  );
}