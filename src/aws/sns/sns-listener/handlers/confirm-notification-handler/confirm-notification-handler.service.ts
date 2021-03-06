import { HttpService, Injectable, NotFoundException } from '@nestjs/common';
import { SnsNotification } from '../../entities/sns-notification';
import { NotificationHandlerInterface } from '../notification-handler-factory/notification-handler-interface';

@Injectable()
export class ConfirmNotificationHandlerService implements NotificationHandlerInterface {
  constructor(private readonly httpService: HttpService) {}

  handle(notification: SnsNotification): void {
    console.log(`Received Subscription Confirmation Message, id=[${notification.MessageId}]`);
    if (!notification.SubscribeURL) {
      throw new NotFoundException('Missing Subscribe Confirmation URL');
    }
    this.callSubscribeURL(notification.SubscribeURL);
  }

  callSubscribeURL(url: string): void {
    console.log(`Invoking SubscribeURL=[${url}]`);
    this.httpService
      .get(url)
      .toPromise()
      .then(subscribeResponse => {
        console.log(JSON.stringify(subscribeResponse.data));
      });
    console.log('Successfully Subscribed to topic');
  }
}
