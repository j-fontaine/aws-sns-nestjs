import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmationHandlerService } from './confirmation-handler.service';

describe('ConfirmationHandlerService', () => {
  let service: ConfirmationHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfirmationHandlerService],
    }).compile();

    service = module.get<ConfirmationHandlerService>(ConfirmationHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
