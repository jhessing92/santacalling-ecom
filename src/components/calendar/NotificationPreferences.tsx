import React from 'react';
import { Mail } from 'lucide-react';
import { NotificationTiming } from '../../types/notification';

interface NotificationPreferencesProps {
  email: string;
  onEmailChange: (email: string) => void;
  timing: NotificationTiming;
  onTimingChange: (timing: NotificationTiming) => void;
}

export function NotificationPreferences({ 
  email, 
  onEmailChange, 
  timing, 
  onTimingChange 
}: NotificationPreferencesProps) {
  const timingOptions: { value: NotificationTiming; label: string }[] = [
    { value: '15min', label: '15 minutes before' },
    { value: '2hours', label: '2 hours before' },
    { value: '1day', label: '1 day before' },
    { value: '2days', label: '2 days before' },
    { value: '1week', label: '1 week before' }
  ];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-white mb-2">Email for Notifications</label>
        <div className="flex items-center gap-2">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="your@email.com"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border-2 border-white/20 
                       text-white focus:outline-none focus:border-red-500/50"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-white mb-2">Notification Timing</label>
        <select
          value={timing}
          onChange={(e) => onTimingChange(e.target.value as NotificationTiming)}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border-2 border-white/20 
                   text-white focus:outline-none focus:border-red-500/50"
        >
          {timingOptions.map((option) => (
            <option key={option.value} value={option.value} className="bg-gray-800">
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <p className="text-white/60 text-sm">
        We'll send you a reminder email before your scheduled call with Santa
      </p>
    </div>
  );
}