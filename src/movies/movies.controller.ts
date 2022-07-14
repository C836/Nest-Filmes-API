import {
  Controller,
  ParseIntPipe,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieModel } from './movies.model';
import { MovieSchema } from './movies.schema';

@Controller('/movies')
export class MoviesController {
  constructor(
    @InjectRepository(MovieModel) private model: Repository<MovieModel>,
  ) {}

  @Get()
  public async GetAll(): Promise< MovieModel[] > {

    return await this.model.find();;
  }

  @Get('/:id')
  public async Get(
    @Param('id', ParseIntPipe) id: number): Promise< MovieModel > {

    return await this.model.findOne({ where: { id } });
  }

  @Post()
  public async Post(
    @Body() body: MovieSchema): Promise<MovieModel> {

    return await this.model.save(body);
  }

  @Put('/:id')
  public async Put(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: MovieSchema): Promise<MovieModel> {

    await this.model.update(id, body);
    return await this.model.findOne({ where: { id } });
  }

  @Delete('/:id')
  public async Delete(
    @Param('id', ParseIntPipe) id: number): Promise< string > {

    await this.model.delete(id);
    return `Movie ID: "${id}" removed from database.`;
  }
}
