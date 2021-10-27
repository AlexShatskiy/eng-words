import {Entity} from 'typeorm';
import {Word} from "./word.entity";

@Entity("ru_words")
export class RuWordEntity extends Word {
}
