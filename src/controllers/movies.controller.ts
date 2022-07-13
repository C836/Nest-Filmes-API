import {
  Controller,
  ParseIntPipe,
  Param,
  Body,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieModel } from 'src/models/movies.model';
import { MovieSchema } from 'src/schemas/movies.schema';

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
  public async Get(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: MovieModel }> {
    const movie = await this.model.findOne({ where: { id } });

    return { data: movie };
  }

  @Post()
  public async create(@Body() body: MovieSchema,
  ): Promise< MovieModel > {
    const created = await this.model.save(body);
    
    return  created ;
  }

  @Put('/:id')
  public async Put(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: MovieSchema,
  ): Promise<MovieModel> {
    const movie = await this.model.findOne({ where: { id } });

    await this.model.update(id, body);

    return await this.model.findOne({ where: { id } });
  }
}
