import { Module } from '@nestjs/common';
import { SnsAuthService } from '../sns-auth/sns-auth.service';
import { SnsListenerController } from './sns-listener.controller';
import { SnsListenerService } from './sns-listener.service';
import { ConfirmationHandlerService } from './handlers/confirmation-handler/confirmation-handler.service';
import { NotificationHandlerService } from './handlers/notification-handler/notification-handler.service';

@Module({
  controllers: [SnsListenerController],
  providers: [SnsListenerService, SnsAuthService, ConfirmationHandlerService, NotificationHandlerService],
  imports: [SnsAuthService],
})
export class SnsListenerModule {

}
