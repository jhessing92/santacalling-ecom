export type NotificationTiming = '15min' | '2hours' | '1day' | '2days' | '1week';

export interface NotificationPreference {
  email: string;
  timing: NotificationTiming;
}