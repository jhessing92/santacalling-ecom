import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function ChatPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';

  useEffect(() => {
    if (!isSuccess) {
      navigate('/santa-call');
    }
  }, [navigate, isSuccess]);

  if (!isSuccess) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl border-2 border-red-500/30 p-6"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-christmas text-white mb-4">Ho, Ho, Ho! 🎅</h2>
            <p className="text-white/90 leading-relaxed">
              Hello there, my little friend! It's me, Santa Claus! Tap the button below to give me a jingle. 
              I can't wait to hear all about your Christmas wishes and the good things you've been up to this year. 
              Don't be shy—let's have a merry little chat!
            </p>
          </div>

          <div className="aspect-video relative">
            <elevenlabs-convai 
              agent-id="HIKMybnhQi2KD0DfCTQs"
              className="absolute inset-0 w-full h-full"
            ></elevenlabs-convai>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
