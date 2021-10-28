import { Column, PrimaryGeneratedColumn } from 'typeorm';


export class Word {
  constructor(word: string) {
    this.word = word;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;
}
