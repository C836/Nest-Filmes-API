import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { MovieModel } from './movies.model';
import { MovieService } from './movies.service';
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
            GetAll: jest.fn().mockResolvedValue(MovieModel),
          },
        },
      ],
    }).compile();

    movieController = module.get<MoviesController>(MoviesController);
    movieService = module.get<MovieService>(MovieService);
  });
});
