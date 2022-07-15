import {
  Controller,
  ParseIntPipe,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MovieModel } from './../movies.model';
import { MovieSchema } from './../schemas/movies.schema';
import { MovieService } from './../services/movies.service';

@Controller('/movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @ApiOperation({ 
    summary: 'List all movies' })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    isArray: true,
  })
  public async GetAll(): Promise<MovieModel[]> {
    return await this.movieService.GetAll();
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Find movies by ID' })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
  })
  @ApiResponse({
    status: 404,
    description: 'ID not found',
  })
  public async Get(@Param('id', ParseIntPipe) id: number): Promise<MovieModel> {
    return await this.movieService.Get(id);
  }

  @Post()
  @ApiOperation({ 
    summary: 'Add new movie entry' })
  @ApiResponse({
    status: 201,
    description: 'Successful operation',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  public async Post(@Body() body: MovieSchema): Promise<MovieModel> {
    return await this.movieService.Post(body);
  }

  @Put(':id')
  @ApiOperation({ 
    summary: 'Update existing movie entry' })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  @ApiResponse({
    status: 404,
    description: 'ID not found',
  })
  public async Put(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: MovieSchema,
  ): Promise<MovieModel> {
    return await this.movieService.Put(id, body);
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Deletes a movie entry' })
  @ApiResponse({ 
    status: 204, 
    description: 'Successful operation' })
  @ApiResponse({
    status: 404,
    description: 'ID not found',
  })
  public async Delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return await this.movieService.Delete(id);
  }
}
