import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { EngWordEntity } from './entity/eng-word.entity';
import {WordDto} from "./dto/word.entity";
import {RuWordEntity} from "./entity/ru-word.entity";

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(EngWordEntity)
    private readonly connection: Connection,
  ) {}

  async findAll(): Promise<WordDto[]> {
    const words = await this.connection
      .getRepository(EngWordEntity)
      .createQueryBuilder("engWordEntity")
      .leftJoinAndSelect("engWordEntity.ruWords", "ruWords")
      .getMany();

    return words.map(item => item.toDto());
  }

  async create(wordDto: WordDto): Promise<WordDto> {
    const engWord = new EngWordEntity(wordDto.word);
    engWord.ruWords = wordDto.ruTranslations.map(item => new RuWordEntity(item));
    const savedWord = await this.connection.getRepository(EngWordEntity)
      .save(engWord);

    return savedWord.toDto();
  }
}
