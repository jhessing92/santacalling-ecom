import React from 'react';

export function SantaLetterPage() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-white mb-8 text-glow">Your Santa Letter Experience</h1>
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border-2 border-red-500/30">
        <p className="text-white/90 text-lg">
          Your magical letter from Santa is being prepared! 
          We'll contact you soon to gather the special details for your personalized letter.
        </p>
      </div>
    </div>
  );
}