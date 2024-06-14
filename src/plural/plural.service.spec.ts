import { Test, TestingModule } from '@nestjs/testing';
import { PluralService } from './plural.service';

describe('PluralService', () => {
  let service: PluralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PluralService],
    }).compile();

    service = module.get<PluralService>(PluralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
