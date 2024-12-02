import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

export class EmailService {
  private static instance: EmailService;
  private oauth2Client: OAuth2Client;

  private constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      import.meta.env.VITE_GOOGLE_CLIENT_ID,
      import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
      import.meta.env.VITE_GOOGLE_REDIRECT_URI
    );
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  public getAuthUrl(): string {
    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: import.meta.env.VITE_GOOGLE_SCOPE,
    });
  }

  public async getAccessToken(code: string) {
    const { tokens } = await this.oauth2Client.getToken(code);
    this.oauth2Client.setCredentials(tokens);
    return tokens;
  }

  public async sendReminderEmail(to: string, dateTime: Date) {
    const gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
    
    const emailContent = `
      Subject: Your Santa Call Reminder
      To: ${to}
      From: noreply@shooflyai.com

      Hello!

      This is a reminder that your magical call with Santa is scheduled for ${dateTime.toLocaleString()}.

      To prepare for your call:
      1. Find a quiet space
      2. Test your microphone
      3. Make sure your device is charged

      We can't wait to bring the magic of Christmas to you!

      Best wishes,
      The ShooflyAI Team
    `;

    const encodedEmail = Buffer.from(emailContent)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    try {
      await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: encodedEmail,
        },
      });
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }
}