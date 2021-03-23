import { Test, TestingModule } from '@nestjs/testing';
import { SnsProviderService } from './sns-provider.service';

describe('SnsProviderService', () => {
  let service: SnsProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnsProviderService]
    }).compile();

    service = module.get<SnsProviderService>(SnsProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
