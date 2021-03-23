import { BadRequestException, Injectable } from '@nestjs/common';
import { AWSError } from 'aws-sdk';
import { SubscribeInput } from 'aws-sdk/clients/sns';
import { v4 } from 'public-ip';
import { SnsProviderService } from '../sns-provider/sns-provider.service';
import { SnsNotification } from './entities/sns-notification';
import { ConfirmNotificationHandlerService } from './handlers/confirm-notification-handler/confirm-notification-handler.service';
import { NotificationHandlerService } from './handlers/notification-handler/notification-handler.service';
import { SNSNotificationTypes } from './util/sns-notification-types';

@Injectable()
export class SnsListenerService {
  constructor(
    private readonly snsProviderService: SnsProviderService,
    private readonly notificationHandler: NotificationHandlerService,
    private readonly confirmationHandler: ConfirmNotificationHandlerService
  ) {}

  private status = 'Not ready';

  getListeningStatus(): string {
    return this.status;
  }

  subscribeToSNS(topicArn: string): void {
    v4().then(ip => {
      const params: SubscribeInput = {
        Protocol: 'http',
        TopicArn: topicArn,
        Endpoint: `http://${ip}/sns-listener`
      };
      if (process.env.NODE_ENV == 'development') {
        params.Endpoint = `http://${process.env.DEV_ADDR}/sns-listener`;
      }
      this.snsProviderService.getInstance().subscribe(params, (error: AWSError) => {
        if (error) {
          console.log(error, error.stack);
          this.status = 'Error';
        } else {
          console.log('Requested Subscription');
          this.status = 'Pending Confirmation';
        }
      });
    });
  }

  processNotification(message: SnsNotification): string {
    console.log(message);
    switch (message.Type) {
      case SNSNotificationTypes.NOTIFICATION:
        this.notificationHandler.handle(message);
        break;
      case SNSNotificationTypes.SUBSCRIPTION_CONFIRMATION:
        this.confirmationHandler.handle(message);
        break;
      default:
        throw new BadRequestException('Unknown Notification Type');
    }
    return 'done';
  }
}
