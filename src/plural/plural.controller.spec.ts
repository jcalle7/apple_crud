import { Test, TestingModule } from '@nestjs/testing';
import { PluralController } from './plural.controller';
import { PluralService } from './plural.service';

describe('PluralController', () => {
  let controller: PluralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PluralController],
      providers: [PluralService],
    }).compile();

    controller = module.get<PluralController>(PluralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
