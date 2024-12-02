import React from 'react';

interface VoiceAnimationProps {
  isActive: boolean;
}

export function VoiceAnimation({ isActive }: VoiceAnimationProps) {
  if (!isActive) return null;

  return (
    <div 
      className="flex justify-center items-center space-x-1 mb-4"
      role="status"
      aria-label="Voice activity indicator"
    >
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-8 bg-red-500 rounded-full animate-sound-wave"
          style={{
            animation: `soundWave 1s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}