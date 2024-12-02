import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Gift } from 'lucide-react';

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
            <h3 className="text-xl font-bold text-white mb-4 font-christmas">Frequently Asked Questions</h3>
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
              <div className="flex items-center gap-2 text-white/90">
                <Gift className="w-5 h-5 text-red-500" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="flex flex-col items-end gap-2">
              <Link to="/terms" className="text-white/70 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-white/60 text-sm border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} CallingSantaClaus.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}