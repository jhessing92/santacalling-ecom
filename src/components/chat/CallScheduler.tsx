import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, PhoneCall, ArrowRight, Volume2, Mic, Battery } from 'lucide-react';
import { MicrophoneTester } from './MicrophoneTester';

interface CallSchedulerProps {
  onSchedule: (dateTime: Date) => void;
  onStartNow: () => void;
}

export function CallScheduler({ onSchedule, onStartNow }: CallSchedulerProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [showScheduler, setShowScheduler] = useState(false);
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

  const handleScheduleCall = () => {
    if (selectedDate && selectedTime) {
      const dateTime = new Date(`${selectedDate}T${selectedTime}`);
      onSchedule(dateTime);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {!showScheduler ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Preparation Steps */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-red-500/30 mb-8">
              <h3 className="text-xl font-christmas text-white mb-4 text-center">
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

            <div className="text-center mb-8">
              <h2 className="text-2xl font-christmas text-white mb-2">
                Ready for Your Magical Call?
              </h2>
              <p className="text-white/80">Choose when you'd like to talk to Santa</p>
            </div>

            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartNow}
                className="w-full py-4 bg-gradient-to-r from-red-500 to-green-500 
                         text-white font-bold rounded-xl shadow-lg shadow-red-500/30 
                         hover:shadow-red-500/50 transition-all duration-300 
                         font-christmas relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-green-600 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Talk Now
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowScheduler(true)}
                className="w-full py-4 bg-white/10 backdrop-blur-md text-white 
                         font-bold rounded-xl border-2 border-white/20 
                         hover:bg-white/20 transition-all duration-300 
                         font-christmas flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule for Later
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <button
              onClick={() => setShowScheduler(false)}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              <span>Back to Options</span>
            </button>

            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border-2 border-white/20 
                           text-white focus:outline-none focus:border-red-500/50"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Select Time</label>
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border-2 border-white/20 
                           text-white focus:outline-none focus:border-red-500/50"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScheduleCall}
                disabled={!selectedDate || !selectedTime}
                className="w-full py-4 bg-gradient-to-r from-red-500 to-green-500 
                         text-white font-bold rounded-xl shadow-lg shadow-red-500/30 
                         hover:shadow-red-500/50 transition-all duration-300 
                         font-christmas disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Schedule Call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}