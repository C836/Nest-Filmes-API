import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './modules/movies.module';

@Module({
  imports: [
    MoviesModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "moviesdb.db",
      entities: ["dist/**/*.model.js"],
      synchronize: true
    }),
  ],
})
export class AppModule {}
