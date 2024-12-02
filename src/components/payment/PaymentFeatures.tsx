import React from 'react';
import { PaymentFeature } from '../../types/payment';

interface PaymentFeaturesProps {
  features: PaymentFeature[];
}

export function PaymentFeatures({ features }: PaymentFeaturesProps) {
  return (
    <ul className="space-y-1.5">
      {features.map((feature, index) => (
        <li key={index} className="text-white/80 flex items-center gap-1.5 text-xs">
          <span>{feature.icon}</span>
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
  );
}