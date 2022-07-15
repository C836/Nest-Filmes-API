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
import { MovieModel } from './movies.model';
import { MovieSchema } from './schemas/movies.schema';
import { MovieService } from './movies.service';

@Controller('/movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  public async GetAll(): Promise< MovieModel[] > {

    return await this.movieService.GetAll();;
  }

  @Get('/:id')
  public async Get(
    @Param('id', ParseIntPipe) id: number): Promise< MovieModel > {

    return await this.movieService.Get(id);
  }

  @Post()
  public async Post(
    @Body() body: MovieSchema): Promise<MovieModel> {

    return await this.movieService.Post(body);
  }

  @Put('/:id')
  public async Put(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: MovieSchema): Promise<MovieModel> {

    return await this.movieService.Put(id, body);
  }

  @Delete('/:id')
  public async Delete(
    @Param('id', ParseIntPipe) id: number): Promise< string > {

    return await this.movieService.Delete(id);
  }
}
