export interface PaymentFeature {
  icon: string;
  text: string;
}

export interface PaymentDetails {
  price: number;
  currency: string;
  interval: string;
  features: PaymentFeature[];
}