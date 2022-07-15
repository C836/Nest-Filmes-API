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
      return await this.movieRepository.findOneOrFail({ where: { id } })} 

    catch(error) {
      throw new NotFoundException
    }
  }

  public async Post(body: MovieSchema): Promise<MovieModel> {
    return await this.movieRepository.save(body)
  }

  public async Put(id: number, body: MovieSchema): Promise<MovieModel> {
    await this.movieRepository.update(id, body)

    try{
      return await this.movieRepository.findOneOrFail({ where: { id } });
    }
    
    catch(error) {
      throw new NotFoundException
    }
  }

  public async Delete(id: number): Promise<string> {
    try {
      await this.movieRepository.findOneOrFail({ where: { id } });
      await this.movieRepository.delete(id);

      return `Movie ID: "${id}" removed from database.`;
    }

    catch(error) {
      throw new NotFoundException
    } 
  }
}
