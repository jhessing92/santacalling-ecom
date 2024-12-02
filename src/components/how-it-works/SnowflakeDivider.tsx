import React from 'react';

interface SnowflakeDividerProps {
  className?: string;
}

export function SnowflakeDivider({ className = '' }: SnowflakeDividerProps) {
  return (
    <div className={`w-full h-px bg-gradient-to-r from-transparent via-red-500/30 
                    to-transparent flex items-center justify-center ${className}`}>
      <div className="absolute bg-red-500/10 p-2 rounded-full">
        <span className="text-2xl">❄️</span>
      </div>
    </div>
  );
}