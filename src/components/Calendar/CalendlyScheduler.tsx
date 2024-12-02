import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { CalendarIntegration } from './CalendarIntegration';

interface CalendlySchedulerProps {
  onScheduled: (eventUri: string) => void;
  onBack: () => void;
}

export function CalendlyScheduler({ onScheduled, onBack }: CalendlySchedulerProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [email, setEmail] = useState('');
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);

  const handleSchedule = async () => {
    if (!selectedDate || !selectedTime || !email) return;

    const dateTime = new Date(`${selectedDate}T${selectedTime}`);
    setShowCalendarOptions(true);
    onScheduled('mock-event-uri');
  };

  if (showCalendarOptions) {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white text-center mb-3 font-christmas">
          Your Call is Scheduled!
        </h3>
        
        <p className="text-white/90 text-center mb-6">
          We've added your call to the calendar
        </p>

        <CalendarIntegration 
          dateTime={new Date(`${selectedDate}T${selectedTime}`)}
          email={email}
          onEmailChange={setEmail}
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-green-500 
                   text-white font-bold rounded-lg shadow-lg shadow-red-500/30 
                   hover:shadow-red-500/50 transition-all duration-300 font-christmas"
        >
          Done
        </motion.button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-red-500/20 p-3 rounded-full">
          <Calendar className="w-8 h-8 text-red-500" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white text-center mb-3 font-christmas">
        Schedule Your Santa Call
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-white mb-2">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={format(new Date(), 'yyyy-MM-dd')}
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
          <label className="block text-white mb-2">Email Address</label>
          <div className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border-2 border-white/20 
                       text-white focus:outline-none focus:border-red-500/50"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="flex-1 py-3 px-4 bg-white/10 hover:bg-white/20
                     text-white font-bold rounded-lg transition-all duration-300 
                     font-christmas"
          >
            Back
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSchedule}
            disabled={!selectedDate || !selectedTime || !email}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-red-500 to-green-500 
                     text-white font-bold rounded-lg shadow-lg shadow-red-500/30 
                     hover:shadow-red-500/50 transition-all duration-300 font-christmas
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Schedule Call
          </motion.button>
        </div>
      </div>
    </div>
  );
}