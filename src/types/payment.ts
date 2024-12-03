export class PaymentService {
  private static instance: PaymentService;

  private constructor() {}

  public static getInstance(): PaymentService {
    if (!PaymentService.instance) {
      PaymentService.instance = new PaymentService();
    }
    return PaymentService.instance;
  }

  public async processPayment(): Promise<boolean> {
    // Simulate payment success
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });
  }
}