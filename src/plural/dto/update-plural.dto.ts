import { PartialType } from '@nestjs/swagger';
import { CreatePluralDto } from './create-plural.dto';

export class UpdatePluralDto extends PartialType(CreatePluralDto) {}
