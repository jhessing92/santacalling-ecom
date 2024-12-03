import { LucideIcon } from 'lucide-react';

export interface Package {
  id: string;
  title: string;
  price: number;
  icon: LucideIcon;
  description: string;
  ctaText: string;
  features: string[];
  route: string;
  highlight?: boolean;
  visible: boolean;
}

export interface PackageCardProps {
  id: string;
  title: string;
  price: number;
  icon: LucideIcon;
  description: string;
  ctaText: string;
  features: string[];
  highlight?: boolean;
  visible: boolean;
  onSelect: () => void;
}

export type NotificationTiming = '15min' | '2hours' | '1day' | '2days' | '1week';

export interface NotificationPreference {
  email: string;
  timing: NotificationTiming;
}
