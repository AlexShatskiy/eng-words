import {Entity, JoinTable, ManyToMany} from 'typeorm';
import {Word} from "./word.entity";
import {RuWordEntity} from "./ru-word.entity";
import {WordDto} from "../dto/word.entity";

@Entity("eng_words")
export class EngWordEntity extends Word {
  @ManyToMany(() => RuWordEntity, ru_word => ru_word.word, {
    cascade: true
  })
  @JoinTable()
  ruWords: RuWordEntity[];

  toDto(): WordDto {
    return {
      word: this.word,
      ruTranslations: this.ruWords?.map(item => item.word) || []
    }
  }
}
