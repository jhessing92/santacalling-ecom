import React from 'react';

interface WidgetErrorProps {
  error: string;
  onRetry: () => void;
}

export function WidgetError({ error, onRetry }: WidgetErrorProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-30">
      <div className="bg-red-900/80 p-4 rounded-lg max-w-md text-center">
        <p className="text-white">{error}</p>
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}