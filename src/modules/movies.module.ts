import { Module } from "@nestjs/common";
import { MoviesController } from "src/controllers/movies.controller";

@Module({
    controllers: [MoviesController]
})

export class MoviesModule {}