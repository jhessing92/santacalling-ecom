import React, { useEffect, useState, useCallback } from 'react';
import { VoiceAnimation } from './VoiceAnimation';
import { Loader2 } from 'lucide-react';
import { WidgetLoader } from './WidgetLoader';
import { WidgetError } from './WidgetError';
import { SpeakingIndicator } from './SpeakingIndicator';

interface ElevenLabsWidgetProps {
  skipPaywall?: boolean;
}

export function ElevenLabsWidget({ skipPaywall = false }: ElevenLabsWidgetProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <div className="relative h-full" role="region" aria-label="Santa's Chat Interface">
      <VoiceAnimation isActive={isSpeaking} />
      
      <div 
        className="relative w-full h-full rounded-xl overflow-hidden bg-white/5 border-2 border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30"
        role="application"
        aria-busy={isLoading}
      >
        {isLoading && <WidgetLoader />}
        {error && <WidgetError error={error} onRetry={loadScript} />}
        {isSpeaking && <SpeakingIndicator />}

        <elevenlabs-convai 
          agent-id="HIKMybnhQi2KD0DfCTQs"
          className="w-full h-full flex items-center justify-center"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        ></elevenlabs-convai>
      </div>
    </div>
  );
}