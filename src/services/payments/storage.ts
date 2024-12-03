import { STRIPE_CONFIG } from './constants';

export const PaymentStorage = {
  setPending: () => {
    localStorage.setItem(STRIPE_CONFIG.PENDING_KEY, 'true');
  },

  clearPending: () => {
    localStorage.removeItem(STRIPE_CONFIG.PENDING_KEY);
  },

  isPending: (): boolean => {
    return localStorage.getItem(STRIPE_CONFIG.PENDING_KEY) === 'true';
  }
};
