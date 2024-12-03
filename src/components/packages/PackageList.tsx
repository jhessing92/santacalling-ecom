import React from 'react';
import { Video, Mail, Phone, Gift } from 'lucide-react';
import { PackageCard } from './PackageCard';

interface Package {
  id: string;
  title: string;
  price: number;
  icon: React.ElementType;
  description: string;
  ctaText: string;
  features: string[];
  route: string;
  highlight?: boolean;
  visible: boolean;
}

interface PackageListProps {
  onSelect: (pkg: Package) => void;
}

const packages: Package[] = [
  {
    id: 'call',
    title: 'Santa Call',
    price: 10,
    icon: Phone,
    description: 'Live audio conversation with Santa Claus himself!',
    ctaText: 'Book Call with Santa',
    features: [
      '🎅 Personal audio chat with Santa',
      '🎄 Share your Christmas wishes',
      '🎁 Interactive conversation',
      '⭐ Magical memories'
    ],
    route: '/santa-call',
    visible: true
  },
  {
    id: 'bundle',
    title: 'Santa Bundle',
    price: 50,
    icon: Gift,
    description: 'The complete Santa Claus experience!',
    ctaText: 'Get the Christmas Bundle',
    features: [
      '🎅 Live audio call with Santa',
      '✉️ Personal letter',
      '🎥 30-second custom video message',
      '⭐ Save $5!'
    ],
    route: '/santa-bundle',
    highlight: true,
    visible: false
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
    route: '/santa-letter',
    visible: false
  },
  {
    id: 'video',
    title: 'Santa Video',
    price: 10,
    icon: Video,
    description: 'Receive a special 30-second video message from Santa!',
    ctaText: 'Request Video Message',
    features: [
      '🎥 30-second personalized video',
      '🎄 Your name mentioned',
      '🎁 Special message',
      '⭐ Shareable link'
    ],
    route: '/santa-video',
    visible: false
  }
];

export function PackageList({ onSelect }: PackageListProps) {
  const visiblePackages = packages.filter(pkg => pkg.visible);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-8 max-w-md mx-auto">
      {visiblePackages.map((pkg) => (
        <div key={pkg.id} className="relative">
          <PackageCard
            {...pkg}
            onSelect={() => onSelect(pkg)}
          />
        </div>
      ))}
    </div>
  );
}

export type { Package };