import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { MoviesController } from "src/controllers/movies.controller";
import { MovieModel } from "src/models/movies.model";

@Module({
    imports: [TypeOrmModule.forFeature([MovieModel])],
    controllers: [MoviesController]
})

export class MoviesModule {}