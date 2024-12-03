export interface PaymentStatus {
  isPending: boolean;
  isSuccess: boolean;
}

export interface PaymentResult {
  success: boolean;
  error?: string;
}
