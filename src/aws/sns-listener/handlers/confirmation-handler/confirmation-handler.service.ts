import { Injectable } from '@nestjs/common';
import { SnsNotification } from '../../entities/sns-message';

@Injectable()
export class ConfirmationHandlerService {
  handle(notification: SnsNotification): void {
    console.log(`Received Subscription Confirmation Message, id=[${notification.MessageId}]`);
  }
}
