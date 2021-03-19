import { Injectable } from '@nestjs/common';
import { SnsNotification } from '../../entities/sns-message';

@Injectable()
export class NotificationHandlerService {

  handle(notification: SnsNotification): void {
    console.log(`Received Notificaion Message, id=[${notification.MessageId}]`);
  }
}
