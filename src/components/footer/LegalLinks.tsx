import React from 'react';
import { Link } from 'react-router-dom';

export function LegalLinks() {
  return (
    <div className="flex flex-col items-center md:items-end gap-2">
      <Link 
        to="/privacy" 
        className="text-white/70 hover:text-white transition-colors text-sm 
                 py-1 px-2 rounded-lg hover:bg-white/5"
      >
        Privacy Policy
      </Link>
      <Link 
        to="/terms" 
        className="text-white/70 hover:text-white transition-colors text-sm 
                 py-1 px-2 rounded-lg hover:bg-white/5"
      >
        Terms & Conditions
      </Link>
    </div>
  );
}