import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Gift } from 'lucide-react';
import { LegalLinks } from './LegalLinks';
import { FooterCTA } from './FooterCTA';
import { Copyright } from './Copyright';

export function Footer() {
  const faqs = [
    { question: "What if my child misses the call?", href: "/faq#missed-call" },
    { question: "How personalized are the Santa letters?", href: "/faq#letters" },
    { question: "What is the refund policy?", href: "/faq#refunds" }
  ];

  return (
    <footer className="w-full py-8 sm:py-12 px-4 bg-black/20 backdrop-blur-sm mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-christmas">
              Frequently Asked Questions
            </h3>
            <ul className="space-y-2">
              {faqs.map((faq, index) => (
                <li key={index}>
                  <Link 
                    to={faq.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {faq.question}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Secure Payment</span>
              </div>
              <FooterCTA />
            </div>
          </div>

          <LegalLinks />
        </div>

        <Copyright />
      </div>
    </footer>
  );
}