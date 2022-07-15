import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieModel } from './../movies.model';
import { MovieSchema } from './../schemas/movies.schema';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieModel)
    private readonly movieRepository: Repository<MovieModel>,
  ) {}

  public async GetAll(): Promise<MovieModel[]> {
    return await this.movieRepository.find();
  }

  public async Get(id: number): Promise<MovieModel> {
    try{
      return await this.movieRepository.findOne({ where: { id } })} 

    catch(error) {
      throw new NotFoundException
    }
  }

  public async Post(body: MovieSchema): Promise<MovieModel> {
    try{
      return await this.movieRepository.save(body)}

    catch(error) {
      throw new BadRequestException
    }
  }

  public async Put(id: number, body: MovieSchema): Promise<MovieModel> {
    try{
      await this.movieRepository.update(id, body)

      return await this.movieRepository.findOne({ where: { id } });
    }
    
    catch(error) {
      if(error.status === 400) {
        throw new BadRequestException
      } 
      else if(error.status === 404) {
        throw new NotFoundException
      }
    }
  }

  public async Delete(id: number): Promise<string> {
    try {
      await this.movieRepository.delete(id);

      return `Movie ID: "${id}" removed from database.`;
    }

    catch(error) {
      throw new NotFoundException
    } 
  }
}
