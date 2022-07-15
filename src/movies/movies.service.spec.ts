import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieModel } from './movies.model';
import { MovieService } from './movies.service';

import {
  mockMovieList,
  mockMovieEntity,
  mockMovieUpdatedEntity,
} from './schemas/movie.mocks';

describe('MovieService', () => {
  let movieService: MovieService;
  let movieRepository: Repository<MovieModel>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieService,
        {
          provide: getRepositoryToken(MovieModel),
          useValue: {             
            find: jest.fn().mockResolvedValue(mockMovieList)},
        },
      ],
    }).compile();

    movieService = module.get<MovieService>(MovieService);
    movieRepository = module.get<Repository<MovieModel>>(
      getRepositoryToken(MovieModel),
    );
  });

  it('should be defined', () => {
    expect(movieService).toBeDefined();
    expect(movieRepository).toBeDefined();
  });

  describe('find', () => {
    it('should return a movie list successfully', async () => {
      const result = await movieService.GetAll();

      expect(result).toEqual(mockMovieList);
      expect(movieRepository.find).toHaveBeenCalledTimes(1);
    });
  });
});
