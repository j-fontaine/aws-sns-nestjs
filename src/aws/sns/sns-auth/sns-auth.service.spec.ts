import { Test, TestingModule } from '@nestjs/testing';
import { SnsAuthService } from './sns-auth.service';

describe('SnsAuthService', () => {
  let service: SnsAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnsAuthService]
    }).compile();

    service = module.get<SnsAuthService>(SnsAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
