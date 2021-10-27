import { Controller, Get } from '@nestjs/common';
import { WordsService } from './words.service';
import {WordDto} from "./dto/word.entity";

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  async findAll(): Promise<WordDto[]> {
    const words = await this.wordsService.findAll();
    return words.map(item => item.toDto());
  }
}
