import { HttpModule, Module } from '@nestjs/common';
import { SnsAuthModule } from '../sns-auth/sns-auth.module';
import { ConfirmationHandlerService } from './handlers/confirmation-handler/confirmation-handler.service';
import { NotificationHandlerService } from './handlers/notification-handler/notification-handler.service';
import { SnsListenerController } from './sns-listener.controller';
import { SnsListenerService } from './sns-listener.service';

@Module({
  imports: [HttpModule, SnsAuthModule],
  controllers: [SnsListenerController],
  providers: [SnsListenerService, ConfirmationHandlerService, NotificationHandlerService],
  exports: []
})
export class SnsListenerModule {}
