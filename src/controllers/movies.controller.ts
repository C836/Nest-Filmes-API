import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieModel } from 'src/models/movies.model';

@Controller('/movies')
export class MoviesController {
  constructor(
    @InjectRepository(MovieModel) private model: Repository<MovieModel>,
  ) {}
  
  @Get()
  public GetAll():any {
      return { data: "GET"}
  }
}
