import { HttpModule, HttpService, Module } from '@nestjs/common';
import { ConfirmNotificationHandlerService } from './confirm-notification-handler/confirm-notification-handler.service';
import { NotificationHandlerFactoryService } from './notification-handler-factory/notification-handler-factory.service';
import { NotificationHandlerService } from './notification-handler/notification-handler.service';

@Module({
  imports: [HttpModule, HttpService],
  controllers: [],
  providers: [ConfirmNotificationHandlerService, NotificationHandlerService, NotificationHandlerFactoryService],
  exports: []
})
export class HandlersModule {}
