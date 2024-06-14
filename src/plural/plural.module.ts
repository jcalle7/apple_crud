import { Module } from '@nestjs/common';
import { PluralService } from './plural.service';
import { PluralController } from './plural.controller';

@Module({
  controllers: [PluralController],
  providers: [PluralService],
})
export class PluralModule {}
