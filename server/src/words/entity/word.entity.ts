import { Column, PrimaryGeneratedColumn } from 'typeorm';


export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;
}
