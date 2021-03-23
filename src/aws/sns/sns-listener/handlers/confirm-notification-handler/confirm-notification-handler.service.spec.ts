import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmNotificationHandlerService } from './confirm-notification-handler.service';

describe('ConfirmNotificationHandlerService', () => {
  let service: ConfirmNotificationHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfirmNotificationHandlerService],
      imports: [HttpModule]
    }).compile();

    service = module.get<ConfirmNotificationHandlerService>(ConfirmNotificationHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
