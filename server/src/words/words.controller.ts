import {Body, Controller, Get, Post} from '@nestjs/common';
import { WordsService } from './words.service';
import {WordDto} from "./dto/word.entity";

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  findAll(): Promise<WordDto[]> {
    return this.wordsService.findAll();
  }

  @Post()
  create(@Body() createWordDto: WordDto): Promise<WordDto> {
    return this.wordsService.create(createWordDto);
  }
}
