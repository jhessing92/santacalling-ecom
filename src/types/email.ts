export interface EmailConfig {
    to: string;
    subject: string;
    body: string;
  }
  
  export interface EmailResponse {
    success: boolean;
    error?: string;
  }