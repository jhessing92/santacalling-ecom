import React from 'react';

export function Snowfall() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="snowfall absolute"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationIterationCount: 'infinite',
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  );
}