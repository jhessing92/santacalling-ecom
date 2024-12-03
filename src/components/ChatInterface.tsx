import React from 'react';
import { ElevenLabsWidget } from './chat/ElevenLabsWidget';

export function ChatInterface() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-green-500 p-1 shadow-lg shadow-red-500/30">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <span className="text-4xl">🎅</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2 text-glow">Call with Santa Claus</h2>
      </div>

      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-8">
        <p className="text-white/90 text-lg leading-relaxed">
          Ho ho ho! 🎅🎄<br /><br />
          You're about to have a magical chat with Santa Claus himself!<br />
          Get ready to share your Christmas wishes, tell Santa how good (or naughty!) you've been, and maybe even hear a special story or two from the North Pole. Santa is always listening with a kind heart, and he can't wait to hear all about your year.<br /><br />
          Just press the button below, speak into the magic microphone, and Santa will be ready to talk to you! ✨<br /><br />
          Santa will laugh with you, ask you questions, and chat just like you're sitting together by the fireplace. Ready to make this the most special Christmas ever? Ho ho ho! 🎁
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4">
        <ElevenLabsWidget skipPaywall={true}/>
      </div>
    </div>
  );
}