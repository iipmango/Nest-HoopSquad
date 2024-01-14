import { PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

export class auth {
  @PrimaryGeneratedColumn()
  id: number;
}
