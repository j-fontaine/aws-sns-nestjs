import { BadRequestException, Injectable } from '@nestjs/common';
import { SNSNotificationTypes } from '../../util/sns-notification-types';
import { ConfirmNotificationHandlerService } from '../confirm-notification-handler/confirm-notification-handler.service';
import { NotificationHandlerService } from '../notification-handler/notification-handler.service';
import { NotificationHandlerInterface } from './notification-handler-interface';

@Injectable()
export class NotificationHandlerFactoryService {
  private handlers: Map<string, NotificationHandlerInterface> = new Map<string, NotificationHandlerInterface>();
  constructor(private readonly orderHandlerService: NotificationHandlerService, private readonly confirmHandlerService: ConfirmNotificationHandlerService) {
    this.handlers.set(SNSNotificationTypes.NOTIFICATION, orderHandlerService);
    this.handlers.set(SNSNotificationTypes.SUBSCRIPTION_CONFIRMATION, confirmHandlerService);
  }

  getInstance(notificationType: SNSNotificationTypes): NotificationHandlerInterface {
    if (!notificationType || !this.handlers.has(notificationType)) {
      throw new BadRequestException('Cannot handle notification type');
    }
    return this.handlers.get(notificationType);
  }
}
