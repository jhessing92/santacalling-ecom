import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuickPackageModal } from './packages/QuickPackageModal';

export function Header() {
  const [showPackageModal, setShowPackageModal] = useState(false);

  return (
    <header className="w-full py-4 px-4 bg-gradient-to-r from-red-700 to-green-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-christmas">ShooflyAI</h1>
        </Link>
        <button
          onClick={() => setShowPackageModal(true)}
          className="text-white text-base sm:text-lg font-christmas 
                   bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full
                   transition-all duration-300 hover:scale-105"
        >
          Talk to Santa!
        </button>
      </div>

      <QuickPackageModal 
        isOpen={showPackageModal}
        onClose={() => setShowPackageModal(false)}
        defaultPackage="call"
      />
    </header>
  );
}