import React from 'react';
import { Calendar as CalIcon, Mail } from 'lucide-react';

interface CalendarIntegrationProps {
  dateTime: Date;
  email: string;
  onEmailChange: (email: string) => void;
}

export function CalendarIntegration({ dateTime, email, onEmailChange }: CalendarIntegrationProps) {
  const generateGoogleCalendarUrl = () => {
    const event = {
      text: "Santa Call - Magical Christmas Experience",
      dates: `${dateTime.toISOString().replace(/[-:.]/g, '')}/${new Date(dateTime.getTime() + 60000).toISOString().replace(/[-:.]/g, '')}`,
      details: "Your magical call with Santa Claus! Make sure you're in a quiet place with good internet connection.",
      location: "Virtual Call",
    };

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
  };

  const generateAppleCalendarUrl = () => {
    const event = {
      title: "Santa Call - Magical Christmas Experience",
      startDate: dateTime.toISOString(),
      endDate: new Date(dateTime.getTime() + 60000).toISOString(),
      description: "Your magical call with Santa Claus! Make sure you're in a quiet place with good internet connection.",
    };

    return `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.startDate.replace(/[-:.]/g, '')}
DTEND:${event.endDate.replace(/[-:.]/g, '')}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
END:VEVENT
END:VCALENDAR`;
  };

  return (
    <div className="space-y-4 mt-6">
      <div>
        <label className="block text-white mb-2">Email for Reminder</label>
        <div className="flex items-center gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="your@email.com"
            className="flex-grow px-4 py-2 rounded-lg bg-white/10 border-2 border-white/20 
                     text-white focus:outline-none focus:border-red-500/50"
          />
          <div className="bg-green-500/20 px-2 py-1 rounded text-green-400 text-xs">
            15min reminder
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <a
          href={generateGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                   bg-white/10 hover:bg-white/20 text-white rounded-lg 
                   transition-colors text-sm"
        >
          <CalIcon className="w-4 h-4" />
          Add to Google Calendar
        </a>
        <a
          href={generateAppleCalendarUrl()}
          download="santa-call.ics"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                   bg-white/10 hover:bg-white/20 text-white rounded-lg 
                   transition-colors text-sm"
        >
          <CalIcon className="w-4 h-4" />
          Add to Apple Calendar
        </a>
      </div>

      <p className="text-white/60 text-xs text-center">
        <Mail className="w-4 h-4 inline mr-1" />
        We'll send you an email reminder 15 minutes before your call
      </p>
    </div>
  );
}