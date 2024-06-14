import { Injectable } from '@nestjs/common';
import { CreatePluralDto } from './dto/create-plural.dto';
import { UpdatePluralDto } from './dto/update-plural.dto';

@Injectable()
export class PluralService {
  create(createPluralDto: CreatePluralDto) {
    return 'This action adds a new plural';
  }

  findAll() {
    return `This action returns all plural`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plural`;
  }

  update(id: number, updatePluralDto: UpdatePluralDto) {
    return `This action updates a #${id} plural`;
  }

  remove(id: number) {
    return `This action removes a #${id} plural`;
  }
}
