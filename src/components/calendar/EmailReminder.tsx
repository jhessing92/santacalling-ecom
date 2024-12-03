import React, { useState } from 'react';
import { Mail, Loader } from 'lucide-react';
import { EmailService } from '../../services/email';

interface EmailReminderProps {
  dateTime: Date;
  email: string;
}

export function EmailReminder({ dateTime, email }: EmailReminderProps) {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendReminder = async () => {
    if (!email) return;
    
    setIsSending(true);
    setError(null);
    
    try {
      const emailService = EmailService.getInstance();
      const success = await emailService.sendReminderEmail(email, dateTime);
      
      if (success) {
        setIsSuccess(true);
      } else {
        setError('Failed to schedule reminder. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 text-white/60 text-sm">
        <Mail className="w-4 h-4" />
        <span>Email reminder will be sent 15 minutes before your call</span>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}

      {isSuccess && (
        <p className="text-green-500 text-sm mt-2">
          Reminder scheduled successfully!
        </p>
      )}

      {isSending && (
        <div className="flex items-center gap-2 text-white/60 text-sm mt-2">
          <Loader className="w-4 h-4 animate-spin" />
          <span>Scheduling reminder...</span>
        </div>
      )}
    </div>
  );
}