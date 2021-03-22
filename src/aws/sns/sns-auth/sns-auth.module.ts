import { Module } from '@nestjs/common';
import { SnsAuthService } from './sns-auth.service';

@Module({
  controllers: [],
  providers: [SnsAuthService],
  imports: [],
  exports: [SnsAuthService]
})
export class SnsAuthModule {}
