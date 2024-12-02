import React, { useState } from 'react';
import { Video, Mail, Phone, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PaymentService } from '../services/payment';
import { PackageCard } from '../components/packages/PackageCard';
import { BundlePaywallOverlay } from '../components/packages/BundlePaywallOverlay';
import { Hero } from '../components/hero/Hero';
import { UGCSection } from '../components/ugc/UGCSection';
import { HowItWorksSection } from '../components/how-it-works/HowItWorksSection';
import { FAQSection } from '../components/faq/FAQSection';
import { TestimonialSection } from '../components/testimonials/TestimonialSection';

const packages = [
  {
    id: 'bundle',
    title: 'Santa Bundle',
    price: 50,
    icon: Gift,
    description: 'The complete Santa Claus experience!',
    ctaText: 'Get the Christmas Bundle',
    features: [
      '🎅 Live call with Santa',
      '✉️ Personal letter',
      '🎥 Custom video message',
      '⭐ Save $5!'
    ],
    route: '/santa-bundle',
    highlight: true
  },
  {
    id: 'call',
    title: 'Santa Call',
    price: 10,
    icon: Phone,
    description: 'Live conversation with Santa Claus himself!',
    ctaText: 'Book Call with Santa',
    features: [
      '🎅 Personal chat with Santa',
      '🎄 Share your Christmas wishes',
      '🎁 Interactive conversation',
      '⭐ Magical memories'
    ],
    route: '/santa-call'
  },
  {
    id: 'letter',
    title: 'Santa Letter',
    price: 10,
    icon: Mail,
    description: 'Receive a personalized letter from the North Pole!',
    ctaText: 'Order Letter from Santa',
    features: [
      '✉️ Handcrafted letter',
      '🎄 Custom details about you',
      '🎁 North Pole stamp',
      '⭐ Keepsake envelope'
    ],
    route: '/santa-letter'
  },
  {
    id: 'video',
    title: 'Santa Video',
    price: 10,
    icon: Video,
    description: 'Custom video message from Santa!',
    ctaText: 'Request Video Message',
    features: [
      '🎥 Personalized video',
      '🎄 Your name mentioned',
      '🎁 Special message',
      '⭐ Shareable link'
    ],
    route: '/santa-video'
  }
];

export function PackagesPage() {
  const navigate = useNavigate();
  const [showBundlePaywall, setShowBundlePaywall] = useState(false);

  const handlePackageSelection = async (pkg: typeof packages[0]) => {
    if (pkg.id === 'bundle') {
      setShowBundlePaywall(true);
    } else {
      const paymentService = PaymentService.getInstance();
      const success = await paymentService.processPayment();
      if (success) {
        navigate(pkg.route);
      }
    }
  };

  const handleBundleSuccess = () => {
    localStorage.setItem('santa_bundle_access', 'true');
    navigate('/santa-bundle');
  };

  return (
    <>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="relative">
              <PackageCard
                {...pkg}
                onSelect={() => handlePackageSelection(pkg)}
              />
            </div>
          ))}
        </div>
      </div>

      <UGCSection />
      <HowItWorksSection />
      <TestimonialSection />
      <FAQSection />

      {showBundlePaywall && (
        <BundlePaywallOverlay
          onClose={() => setShowBundlePaywall(false)}
          onPaymentSuccess={handleBundleSuccess}
        />
      )}
    </>
  );
}