import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import { NotificationPreferences } from './NotificationPreferences.tsx';
import { NotificationTiming } from '../../types/notification';

interface CalendlySchedulerProps {
  onScheduled: (eventUri: string) => void;
  onBack: () => void;
}

export function CalendlyScheduler({ onScheduled, onBack }: CalendlySchedulerProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [email, setEmail] = useState('');
  const [timing, setTiming] = useState<NotificationTiming>('15min');

  const handleSchedule = async () => {
    if (!selectedDate || !selectedTime || !email) return;

    const dateTime = new Date(`${selectedDate}T${selectedTime}`);
    
    // Simulate scheduling success
    console.log(`Scheduled call for ${dateTime} with notification ${timing} before to ${email}`);
    onScheduled('mock-event-uri');
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Options</span>
      </button>

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

        <NotificationPreferences
          email={email}
          onEmailChange={setEmail}
          timing={timing}
          onTimingChange={setTiming}
        />

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