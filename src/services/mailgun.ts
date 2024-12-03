const MAILGUN_API_KEY = '7e60905ec56989ac32a796d898f9121b-f55d7446-392245b0';
const MAILGUN_DOMAIN = 'sandbox.mailgun.org';

export class MailgunService {
  private static instance: MailgunService;

  private constructor() {}

  public static getInstance(): MailgunService {
    if (!MailgunService.instance) {
      MailgunService.instance = new MailgunService();
    }
    return MailgunService.instance;
  }

  public async sendNotificationEmail(to: string, dateTime: Date, timing: string): Promise<boolean> {
    // For demo purposes, we'll simulate the email sending
    console.log(`Sending notification email to ${to} for call at ${dateTime} with ${timing} reminder`);
    return true;
  }
}