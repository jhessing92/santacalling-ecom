import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

interface MicrophoneTesterProps {
  onTestComplete: () => void;
}

export function MicrophoneTester({ onTestComplete }: MicrophoneTesterProps) {
  const [isTesting, setIsTesting] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const startTest = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
      setIsTesting(true);

      // Create audio context and analyzer
      const audioContext = new AudioContext();
      const analyzer = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      microphone.connect(analyzer);

      // After 3 seconds, stop the test
      setTimeout(() => {
        stream.getTracks().forEach(track => track.stop());
        setIsTesting(false);
        onTestComplete();
      }, 3000);
    } catch (error) {
      console.error('Microphone access denied:', error);
      setHasPermission(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={startTest}
      disabled={isTesting}
      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                ${isTesting 
                  ? 'bg-green-500 text-white cursor-not-allowed' 
                  : hasPermission 
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 hover:bg-red-600 text-white'}`}
    >
      <div className="flex items-center gap-2">
        <Mic className={`w-4 h-4 ${isTesting ? 'animate-pulse' : ''}`} />
        <span>
          {isTesting ? 'Testing...' : hasPermission ? 'Test Again' : 'Test Mic'}
        </span>
      </div>
    </motion.button>
  );
}