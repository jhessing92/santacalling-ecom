import React from 'react';
import { Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full py-4 sm:py-6 px-4 bg-gradient-to-r from-red-700 to-green-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-white animate-pulse" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-christmas">ShooflyAI</h1>
        </Link>
        <p className="text-white text-base sm:text-lg font-christmas">Talk to Santa!</p>
      </div>
    </header>
  );
}