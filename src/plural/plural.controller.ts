import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PluralService } from './plural.service';
import { CreatePluralDto } from './dto/create-plural.dto';
import { UpdatePluralDto } from './dto/update-plural.dto';

@Controller('plural')
export class PluralController {
  constructor(private readonly pluralService: PluralService) {}

  @Post()
  create(@Body() createPluralDto: CreatePluralDto) {
    return this.pluralService.create(createPluralDto);
  }

  @Get()
  findAll() {
    return this.pluralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pluralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePluralDto: UpdatePluralDto) {
    return this.pluralService.update(+id, updatePluralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pluralService.remove(+id);
  }
}
