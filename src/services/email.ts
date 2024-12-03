export class EmailService {
    private static instance: EmailService;
  
    private constructor() {}
  
    public static getInstance(): EmailService {
      if (!EmailService.instance) {
        EmailService.instance = new EmailService();
      }
      return EmailService.instance;
    }
  
    public async sendReminderEmail(to: string, dateTime: Date): Promise<boolean> {
      // Simulate email sending success
      return new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000);
      });
    }
  }