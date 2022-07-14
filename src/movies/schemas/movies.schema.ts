import { IsString, MaxLength, IsInt, Min, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MovieModel } from '../movies.model';

export class MovieSchema {
  id: number

  @IsString()
  @MaxLength(255)
  @ApiProperty({
    type: String,
    maxLength: 255,
    description: 'Movie title',
    example: 'Morbius',
  })
  title: string;

  @IsDateString()
  @ApiProperty({
    type: String,
    pattern: '^d{4}-d{2}-d{2}$',
    description: 'Movie release date',
    example: '2022-03-31',
  })
  release: string;

  @IsInt()
  @Min(0)
  @ApiProperty({
    type: Number,
    description: 'Movie running time in minutes',
    example: 104,
  })
  length: number;

  @IsString()
  @MaxLength(1024)
  @ApiProperty({
    type: String,
    maxLength: 1024,
    description: 'Movie synopsis',
    example:
      'Morbius is a 2022 American superhero film based on the Marvel Comics character of the same name[...]',
  })
  description: string;

  @IsString()
  @MaxLength(255)
  @ApiProperty({
    type: String,
    maxLength: 255,
    description: 'Movie director name',
    example: 'Daniel Espinosa',
  })
  director: string;

  constructor(movie?: Partial<MovieModel>) {
    this.id = movie?.id;
    this.title = movie?.title;
    this.release = movie?.release;
    this.length = movie?.length;
    this.description = movie?.description;
    this.director = movie?.director;
  }
}