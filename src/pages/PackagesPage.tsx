import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PackageList, Package } from '../components/packages/PackageList';
import { BundlePaywallOverlay } from '../components/packages/BundlePaywallOverlay';
import { Hero } from '../components/hero/Hero';
import { UGCSection } from '../components/ugc/UGCSection';
import { HowItWorksSection } from '../components/how-it-works/HowItWorksSection';
import { FAQSection } from '../components/faq/FAQSection';
import { TestimonialSection } from '../components/testimonials/TestimonialSection';

export function PackagesPage() {
  const navigate = useNavigate();
  const [showBundlePaywall, setShowBundlePaywall] = useState(false);

  const handlePackageSelection = async (pkg: Package) => {
    if (pkg.id === 'bundle') {
      setShowBundlePaywall(true);
    } else {
      // Simulate payment success
      setTimeout(() => {
        navigate(pkg.route);
      }, 1000);
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
        <PackageList onSelect={handlePackageSelection} />
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