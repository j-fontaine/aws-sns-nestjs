import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SnsListenerModule } from './aws/sns/sns-listener/sns-listener.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', 'env.development'],
      isGlobal: true
    }),
    SnsListenerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
