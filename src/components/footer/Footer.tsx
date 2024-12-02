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
    <footer className="w-full py-6 sm:py-12 px-4 bg-black/20 backdrop-blur-sm mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 font-christmas">
              Frequently Asked Questions
            </h3>
            <ul className="space-y-2">
              {faqs.map((faq, index) => (
                <li key={index}>
                  <Link 
                    to={faq.href}
                    className="text-white/70 hover:text-white transition-colors text-sm block 
                             py-1 px-2 rounded-lg hover:bg-white/5"
                  >
                    {faq.question}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center border-t border-white/10 md:border-none pt-6 md:pt-0">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-sm sm:text-base">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                <span className="text-sm sm:text-base">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right border-t border-white/10 md:border-none 
                        pt-6 md:pt-0">
            <div className="flex flex-col items-center md:items-end gap-2">
              <Link 
                to="/terms" 
                className="text-white/70 hover:text-white transition-colors text-sm 
                         py-1 px-2 rounded-lg hover:bg-white/5"
              >
                Terms & Conditions
              </Link>
              <Link 
                to="/privacy" 
                className="text-white/70 hover:text-white transition-colors text-sm 
                         py-1 px-2 rounded-lg hover:bg-white/5"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-white/60 text-xs sm:text-sm border-t 
                      border-white/10 pt-6 sm:pt-8">
          <p>© {new Date().getFullYear()} CallingSantaClaus.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}