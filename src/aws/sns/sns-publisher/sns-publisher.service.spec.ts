import { Test, TestingModule } from '@nestjs/testing';
import { SnsPublisherService } from './sns-publisher.service';

describe('SnsPublisherService', () => {
  let service: SnsPublisherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnsPublisherService],
    }).compile();

    service = module.get<SnsPublisherService>(SnsPublisherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
