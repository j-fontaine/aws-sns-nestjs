import { Module } from '@nestjs/common';
import { SnsPublisherService } from './sns-publisher.service';

@Module({
  controllers: [],
  providers: [SnsPublisherService],
  imports: [],
})
export class SnsPublisherModule { }
