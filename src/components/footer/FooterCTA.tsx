import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { QuickPackageModal } from '../packages/QuickPackageModal';

export function FooterCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 
                 text-white rounded-full transition-colors text-sm font-christmas"
      >
        <Gift className="w-4 h-4" />
        Talk to Santa
      </button>

      <QuickPackageModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        defaultPackage="call"
      />
    </>
  );
}