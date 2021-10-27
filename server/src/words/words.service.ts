import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EngWordEntity } from './entity/eng-word.entity';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(EngWordEntity)
    private readonly engWordsRepository: Repository<EngWordEntity>,
  ) {}

  async findAll(): Promise<EngWordEntity[]> {
    return this.engWordsRepository.find();
  }
}
