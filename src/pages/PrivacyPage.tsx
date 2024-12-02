import React from 'react';

export function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8 text-center text-glow font-christmas">Privacy Policy</h1>
      
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border-2 border-red-500/30">
        <div className="prose prose-invert max-w-none">
          <p className="text-white/90 leading-relaxed mb-6">
            At PhotoU, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our Santa Claus AI experience.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6 text-white/90 space-y-2">
            <li>Basic contact information for letter delivery</li>
            <li>Voice recordings during Santa calls</li>
            <li>Payment information (processed securely through Stripe)</li>
            <li>Usage data to improve our services</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 text-white/90 space-y-2">
            <li>To provide personalized Santa experiences</li>
            <li>To process payments and deliver services</li>
            <li>To improve our AI interactions</li>
            <li>To send important updates about your orders</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Data Protection</h2>
          <p className="text-white/90 leading-relaxed mb-6">
            We implement industry-standard security measures to protect your personal information. All data is encrypted and securely stored. We never share your personal information with third parties except as required to provide our services.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
          <p className="text-white/90 leading-relaxed mb-6">
            We are committed to protecting children's privacy. Parent or guardian consent is required for children under 13 to use our services. We collect only the minimum information necessary to provide our services.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-white/90 leading-relaxed">
            If you have any questions about our Privacy Policy, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}