import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full py-4 sm:py-6 px-4 bg-black/20 backdrop-blur-sm mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-white/60 text-xs sm:text-sm gap-4">
        <div className="flex items-center gap-4">
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <span>•</span>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
        <div className="flex items-center text-center sm:text-left">
          <span>© {new Date().getFullYear()} ShooflyAI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}