import { MovieSchema } from './movies.schema';

export const mockMovieList: MovieSchema[] = [
  new MovieSchema({
    id: 0,
    title: 'string',
    release: 'string',
    length: 0,
    description: 'string',
    director: 'string',
  }),
  new MovieSchema({
    id: 0,
    title: 'string',
    release: 'string',
    length: 0,
    description: 'string',
    director: 'string',
  }),
];

export const mockMovieEntity = new MovieSchema({
  title: 'string',
  release: 'string',
  length: 0,
  description: 'string',
  director: 'string',
});

export const mockMovieUpdatedEntity = new MovieSchema({
  title: 'updated',
  release: 'updated',
  length: 1,
  description: 'updated',
  director: 'updated',
});
