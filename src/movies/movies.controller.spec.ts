import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { MovieService } from './movies.service';

import { mockMovieList, mockMovieEntity, mockMovieUpdatedEntity } from './schemas/movie.mocks'

describe('TodoController', () => {
  let movieController: MoviesController;
  let movieService: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [
        {
          provide: MovieService,
          useValue: {
            GetAll: jest.fn().mockResolvedValue(mockMovieList)
          },
        },
      ],
    }).compile();

    movieController = module.get<MoviesController>(MoviesController);
    movieService = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(MoviesController).toBeDefined();
    expect(MovieService).toBeDefined();
  });

  describe('GetAll', () => {
    it('return should be equal to movie model', async () => {
      const result = await movieController.GetAll();

      expect(result).toEqual(mockMovieList);
      expect(typeof result).toEqual('object');
      expect(movieService.GetAll).toHaveBeenCalledTimes(1);
    });
  });
});
