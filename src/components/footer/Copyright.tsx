import React from 'react';

export function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center text-white/60 text-xs sm:text-sm border-t 
                  border-white/10 pt-6 sm:pt-8">
      <p>© {currentYear} ShooflyAI, LLC. All rights reserved.</p>
      <p className="mt-1 text-white/40">
        Santa's magic delivered through cutting-edge AI technology
      </p>
    </div>
  );
}