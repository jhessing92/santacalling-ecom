import { PaymentDetails } from '../types/payment';

export const SANTA_CALL_PAYMENT: PaymentDetails = {
  price: 20,
  currency: 'USD',
  interval: 'per minute',
  features: [
    { icon: '🎅', text: 'Live conversation with Santa' },
    { icon: '🎄', text: 'Share your Christmas wishes' },
    { icon: '🎁', text: 'Personalized experience' },
    { icon: '⭐', text: 'Magical memories' }
  ]
};