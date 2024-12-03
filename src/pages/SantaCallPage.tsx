import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PaywallOverlay } from '../components/payment/PaywallOverlay';
import { CallPreparation } from '../components/chat/CallPreparation';
import { ElevenLabsWidget } from '../components/chat/ElevenLabsWidget'; // Import ElevenLabsWidget

export function SantaCallPage() {
  const navigate = useNavigate();
  const [hasPaid, setHasPaid] = useState(false); // Set to true for testing
  const [isReady, setIsReady] = useState(false);

  // Function to check URL parameters
  const checkSessionId = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    if (sessionId) {
      try {
        let BASE_URL = "https://cws-api.keyspacestudio.tech"
        // BASE_URL = "http://localhost:8080"
        // Make the axios POST request to get session data
        const response = await axios.post(`${BASE_URL}/v1/webhooks/session_data`, {
          session_id: sessionId,
        });

        // Extract user email and status from the response
        const { email, status } = response.data;

        console.log('Session Data:', { email, status });

        // If the status is 'complete', set hasPaid to true
        if (status === 'complete') {
          setHasPaid(true);
        }
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    }
  };

  useEffect(() => {
    checkSessionId(); // Check the session_id when the component mounts
  }, []);

  const handlePaymentSuccess = () => {
    setHasPaid(true);
  };

  const handleReadyForCall = () => {
    setIsReady(true); // Set isReady to true when the "Call Santa" button is clicked
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto mt-[-10%]">
          {!hasPaid ? (
            <PaywallOverlay onPaymentSuccess={handlePaymentSuccess} />
          ) : !isReady ? (
            <CallPreparation onReady={handleReadyForCall} />
          ) : (
            <ElevenLabsWidget skipPaywall={false} /> // Show ElevenLabsWidget when isReady is true
          )}
        </div>
      </div>
    </div>
  );
}