import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieModel } from 'src/models/movies.model';

@Controller('/movies')
export class MoviesController {
  constructor(
    @InjectRepository(MovieModel) private model: Repository<MovieModel>,
  ) {}

  @Get()
  public async GetAll(): Promise<{ data: MovieModel[] }> {
    const list = await this.model.find();

    return { data: list };
  }

  @Get('/:id')
  public async Get(@Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: MovieModel }> {
    const movie = await this.model.findOne({ where: { id } });

    return { data: movie };
  }
}
