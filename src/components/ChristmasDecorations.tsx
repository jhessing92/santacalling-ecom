import React from 'react';

export function ChristmasDecorations() {
  const decorations = ['🎄', '🎅', '🎁', '⭐', '🔔', '🦌', '❄️', '🎨'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {decorations.map((emoji, index) => (
        <div
          key={index}
          className="absolute text-4xl animate-float opacity-40 hover:opacity-100 transition-opacity"
          style={{
            left: `${(index * 25) % 100}%`,
            top: `${Math.sin(index) * 20 + 50}%`,
            animation: `float ${3 + index % 2}s ease-in-out infinite`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
}