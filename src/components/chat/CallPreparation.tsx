import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, Mic, Battery, ArrowRight } from 'lucide-react';
import { MicrophoneTester } from './MicrophoneTester';

interface CallPreparationProps {
  onReady: () => void;
}

export function CallPreparation({ onReady }: CallPreparationProps) {
  const [micTested, setMicTested] = useState(false);

  const preparationSteps = [
    {
      icon: Volume2,
      title: "Find a Quiet Space",
      description: "Make sure you're in a quiet area to hear Santa clearly",
      completed: true
    },
    {
      icon: Mic,
      title: "Test Your Microphone",
      description: "Ensure Santa can hear you",
      completed: micTested,
      action: true
    },
    {
      icon: Battery,
      title: "Check Device",
      description: "Make sure your device is charged",
      completed: true
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-red-500/30 mb-8">
        <h3 className="text-2xl font-christmas text-white mb-6 text-center">
          Let's Get Ready for Santa!
        </h3>
        <div className="space-y-4">
          {preparationSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-black/20 rounded-lg p-4 transition-all duration-300
                       hover:bg-black/30"
            >
              <div className={`p-2 rounded-full ${step.completed ? 'bg-green-500/20' : 'bg-white/20'}`}>
                <step.icon className={`w-6 h-6 ${step.completed ? 'text-green-500' : 'text-white/70'}`} />
              </div>
              <div className="flex-grow">
                <h4 className="text-white font-christmas">{step.title}</h4>
                <p className="text-white/70 text-sm">{step.description}</p>
              </div>
              {step.action && (
                <MicrophoneTester onTestComplete={() => setMicTested(true)} />
              )}
            </div>
          ))}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReady}
        disabled={!micTested}
        className="w-full py-4 bg-gradient-to-r from-red-500 to-green-500 
                 text-white font-bold rounded-xl shadow-lg shadow-red-500/30 
                 hover:shadow-red-500/50 transition-all duration-300 
                 font-christmas relative overflow-hidden group disabled:opacity-50
                 disabled:cursor-not-allowed"
      >
        <div className="relative flex items-center justify-center gap-2">
          <span className="text-lg">Call Santa</span>
          <ArrowRight className="w-5 h-5" />
        </div>
      </motion.button>
    </div>
  );
}