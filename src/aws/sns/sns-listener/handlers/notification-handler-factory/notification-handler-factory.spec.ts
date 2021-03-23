import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmNotificationHandlerService } from '../confirm-notification-handler/confirm-notification-handler.service';
import { NotificationHandlerService } from '../notification-handler/notification-handler.service';
import { NotificationHandlerFactoryService } from './notification-handler-factory.service';

describe('NotificationHandlerFactoryService', () => {
  let service: NotificationHandlerFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationHandlerFactoryService, ConfirmNotificationHandlerService, NotificationHandlerService],
      imports: [HttpModule]
    }).compile();

    service = module.get<NotificationHandlerFactoryService>(NotificationHandlerFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
