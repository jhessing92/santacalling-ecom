import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ElevenLabsWidget } from '../components/chat/ElevenLabsWidget';
import { PaywallOverlay } from '../components/payment/PaywallOverlay';
import { CallScheduler } from '../components/chat/CallScheduler';

export function SantaCallPage() {
  const [hasPaid, setHasPaid] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [scheduledTime, setScheduledTime] = useState<Date | null>(null);

  const handlePaymentSuccess = () => {
    setHasPaid(true);
  };

  const handleScheduleCall = (dateTime: Date) => {
    setScheduledTime(dateTime);
    // Here you would typically make an API call to schedule the call
    alert(`Call scheduled for ${dateTime.toLocaleString()}`);
  };

  const handleStartNow = () => {
    setShowWidget(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto mt-[-10%]">
          {!hasPaid ? (
            <PaywallOverlay onPaymentSuccess={handlePaymentSuccess} />
          ) : !showWidget ? (
            <CallScheduler 
              onSchedule={handleScheduleCall}
              onStartNow={handleStartNow}
            />
          ) : (
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-full h-[500px]">
                <ElevenLabsWidget skipPaywall={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}