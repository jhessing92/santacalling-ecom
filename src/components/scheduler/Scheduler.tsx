import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface SchedulerProps {
  onScheduled: (eventUri: string) => void;
  onBack: () => void;
}

export function Scheduler({ onScheduled, onBack }: SchedulerProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [email, setEmail] = useState('');

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime || !email) return;
    
    // Simulate scheduling success
    const mockEventUri = `mock-event-${Date.now()}`;
    onScheduled(mockEventUri);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-white mb-2">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
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

        <div>
          <label className="block text-white mb-2">Email for Reminder</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border-2 border-white/20 
                     text-white focus:outline-none focus:border-red-500/50"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSchedule}
          disabled={!selectedDate || !selectedTime || !email}
          className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-green-500 
                   text-white font-bold rounded-lg shadow-lg shadow-red-500/30 
                   hover:shadow-red-500/50 transition-all duration-300 font-christmas
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" />
            Schedule Call
          </div>
        </motion.button>
      </div>
    </div>
  );
}