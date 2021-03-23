import { Module } from '@nestjs/common';
import { SnsProviderService } from './sns-provider.service';

@Module({
  controllers: [],
  providers: [SnsProviderService],
  imports: [],
  exports: [SnsProviderService]
})
export class SnsAuthModule {}
