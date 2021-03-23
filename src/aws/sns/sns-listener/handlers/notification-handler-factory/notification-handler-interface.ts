import { SnsNotification } from '../../entities/sns-notification';

export interface NotificationHandlerInterface {
  handle(notification: SnsNotification): void;
}
