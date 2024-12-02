import React from 'react';

export function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8 text-center text-glow font-christmas">Terms & Conditions</h1>
      
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border-2 border-red-500/30">
        <div className="prose prose-invert max-w-none">
          <p className="text-white/90 leading-relaxed">
            By using the AI Santa Claus interface, you agree to use the service responsibly and in accordance with all applicable laws. The AI is intended for entertainment purposes only and is designed to provide a fun and safe experience for users. All interactions are recorded for the purpose of improving service quality but will not be used for any unauthorized purposes. You agree not to input any inappropriate or harmful content, and understand that any violations may result in a termination of service. We are committed to maintaining a positive and secure environment for children. By using this service, you consent to these terms and acknowledge that the AI does not provide real-world advice or actions. For any concerns, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}