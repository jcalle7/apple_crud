import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PluralModule } from './plural/plural.module';

@Module({
  imports: [CatsModule, PluralModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
