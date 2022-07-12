import { Controller, Get } from "@nestjs/common"

@Controller("/movies")
export class MoviesController {
    @Get()
    public GetAll():any {
        return { data: "GET"}
    }
}