import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnsListenerModule } from './aws/sns-listener/sns-listener.module';

@Module({
  imports: [SnsListenerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
