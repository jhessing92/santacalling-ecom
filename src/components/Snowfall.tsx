import React from 'react';

export function Snowfall() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="snowflake absolute animate-snowfall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            opacity: Math.random() * 0.8 + 0.2,
            fontSize: `${Math.random() * 10 + 10}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 5}s`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}