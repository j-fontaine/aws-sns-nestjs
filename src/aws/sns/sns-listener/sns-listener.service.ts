import { BadRequestException, Injectable } from '@nestjs/common';
import { AWSError } from 'aws-sdk';
import { SubscribeInput } from 'aws-sdk/clients/sns';
import { v4 } from 'public-ip';
import { SnsAuthService } from '../sns-auth/sns-auth.service';
import { SnsNotification } from './entities/sns-message';
import { ConfirmationHandlerService } from './handlers/confirmation-handler/confirmation-handler.service';
import { NotificationHandlerService } from './handlers/notification-handler/notification-handler.service';
import { SubscriptionNotificationTypes } from '../util/sns-message-types';


@Injectable()
export class SnsListenerService {

  constructor(
    private readonly snsAuthService: SnsAuthService,
    private readonly notificationHandler: NotificationHandlerService,
    private readonly confirmationHandler: ConfirmationHandlerService) { }

  private status = "Not ready";

  getListeningStatus(): string {
    return this.status;
  }

  subscribeToSNS(topicArn: string): void {
    v4().then((ip) => {
      const params: SubscribeInput = {
        Protocol: 'http',
        TopicArn: topicArn,
        Endpoint: `http://${ip}/sns-listener`,
      }
      if (process.env.NODE_ENV == 'development') {
        params.Endpoint = `http://${process.env.DEV_ADDR}/sns-listener`
      }
      this.snsAuthService.getInstance().subscribe(params, (error: AWSError) => {
        if (error) {
          console.log(error, error.stack);
          this.status = "Error";
        } else {
          console.log('Requested Subscription');
          this.status = 'Pending Confirmation';
        }
      });
    });
  }

  routeNotification(message: SnsNotification): string {
    console.log(message);
    switch (message.Type) {
      case SubscriptionNotificationTypes.NOTIFICATION:
        this.notificationHandler.handle(message);
        break;
      case SubscriptionNotificationTypes.SUBSCRIPTION_CONFIRMATION:
        this.confirmationHandler.handle(message);
        break;
      default:
        throw new BadRequestException('Unknown Notification Type');
    }
    return "done";
  }
}
