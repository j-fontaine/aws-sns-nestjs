import { Injectable } from '@nestjs/common';
import { SnsNotification } from '../../entities/sns-notification';
import { NotificationHandlerInterface } from '../notification-handler-factory/notification-handler-interface';

@Injectable()
export class NotificationHandlerService implements NotificationHandlerInterface {
  handle(notification: SnsNotification): void {
    console.log(`Received Notificaion Message, id=[${notification.MessageId}]`);
    console.log(`Attributes=${JSON.stringify(notification.MessageAttributes)}`);
  }
}
