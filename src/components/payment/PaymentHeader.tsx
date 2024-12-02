import React from 'react';
import { Gift } from 'lucide-react';

export function PaymentHeader() {
  return (
    <>
      <div className="flex items-center justify-center mb-2">
        <div className="bg-red-500/20 p-2 rounded-full">
          <Gift className="w-6 h-6 text-red-500" />
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white text-center mb-2 text-glow font-christmas">
        Special Christmas Call with Santa
      </h3>
    </>
  );
}