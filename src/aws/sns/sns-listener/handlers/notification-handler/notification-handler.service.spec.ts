import { Test, TestingModule } from '@nestjs/testing';
import { NotificationHandlerService } from './notification-handler.service';

describe('NotificationHandlerService', () => {
  let service: NotificationHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationHandlerService],
    }).compile();

    service = module.get<NotificationHandlerService>(NotificationHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
