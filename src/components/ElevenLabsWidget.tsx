import React, { useEffect, useState, useCallback } from 'react';
import { VoiceAnimation } from './VoiceAnimation';
import { Mic, Loader2 } from 'lucide-react';
import { PaywallOverlay } from './payment/PaywallOverlay';

export function ElevenLabsWidget() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasPaid, setHasPaid] = useState(false);

  const loadScript = useCallback(() => {
    const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
    if (existingScript) {
      document.body.removeChild(existingScript);
    }

    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    
    script.onload = () => {
      setIsLoading(false);
      setError(null);
    };
    
    script.onerror = () => {
      setIsLoading(false);
      setError('Failed to load Santa\'s communication module. Please try refreshing the page.');
    };

    document.body.appendChild(script);
    return script;
  }, []);

  useEffect(() => {
    const script = loadScript();

    // Listen for the widget's call button click
    const handleWidgetEvents = (event: Event) => {
      if ((event as CustomEvent).detail?.type === 'call-started') {
        setIsSpeaking(true);
      } else if ((event as CustomEvent).detail?.type === 'call-ended') {
        setIsSpeaking(false);
      }
    };

    window.addEventListener('elevenlabs-convai', handleWidgetEvents);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      window.removeEventListener('elevenlabs-convai', handleWidgetEvents);
    };
  }, [loadScript]);

  return (
    <div className="relative mb-12" role="region" aria-label="Santa's Chat Interface">
      <VoiceAnimation isActive={isSpeaking} />
      
      <div 
        className="relative w-full h-[500px] rounded-xl overflow-hidden bg-white/5 border-2 border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30"
        role="application"
        aria-busy={isLoading}
      >
        {!hasPaid && <PaywallOverlay onPaymentSuccess={() => setHasPaid(true)} />}

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-30">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
              <p className="text-white text-sm">Loading Santa's workshop...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-30">
            <div className="bg-red-900/80 p-4 rounded-lg max-w-md text-center">
              <p className="text-white">{error}</p>
              <button
                onClick={() => loadScript()}
                className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          {isSpeaking && (
            <div className="flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full">
              <Mic className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-sm text-white">Speaking to Santa...</span>
            </div>
          )}
        </div>

        <div className={`transition-opacity duration-300 ${hasPaid ? 'opacity-100' : 'opacity-0'}`}>
          <elevenlabs-convai 
            agent-id="HIKMybnhQi2KD0DfCTQs"
            className="w-full h-full"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          ></elevenlabs-convai>
        </div>
      </div>
    </div>
  );
}