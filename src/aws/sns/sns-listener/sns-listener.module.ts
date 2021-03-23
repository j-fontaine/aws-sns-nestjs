import { HttpModule, Module } from '@nestjs/common';
import { SnsAuthModule } from '../sns-provider/sns-provider.module';
import { SnsListenerController } from './sns-listener.controller';
import { SnsListenerService } from './sns-listener.service';
import { HandlersModule } from './handlers/handlers.module';

@Module({
  imports: [HttpModule, SnsAuthModule, HandlersModule],
  controllers: [SnsListenerController],
  providers: [SnsListenerService],
  exports: []
})
export class SnsListenerModule {}
