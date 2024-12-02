import React from 'react';

interface PaymentButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function PaymentButton({ onClick, children }: PaymentButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-green-500 text-white 
                font-bold rounded-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 
                transition-all duration-300 text-sm"
    >
      {children}
    </button>
  );
}