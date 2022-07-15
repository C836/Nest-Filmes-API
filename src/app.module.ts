import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies/controllers/movies.controller';
import { MovieModel } from './movies/movies.model';
import { MovieService } from './movies/services/movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MovieService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'moviesdb.db',
      entities: ['dist/**/*.model.js'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([MovieModel]),
  ],
})
export class AppModule {}
