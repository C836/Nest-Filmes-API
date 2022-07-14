import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  release: string;

  @Column()
  length: number;

  @Column()
  description: string;

  @Column()
  director: string;
}
