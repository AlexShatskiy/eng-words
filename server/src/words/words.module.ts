import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngWordEntity } from './entity/eng-word.entity';
import { RuWordEntity } from './entity/ru-word.entity';
import { WordsController } from './words.controller';
import { WordsService } from './words.service';

@Module({
  imports: [TypeOrmModule.forFeature([EngWordEntity, RuWordEntity])],
  providers: [WordsService],
  controllers: [WordsController],
})
export class WordsModule {}
