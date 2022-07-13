import { IsString, MaxLength, IsInt, Min, IsDateString } from 'class-validator'

export class MovieSchema {

    @IsString()
    @MaxLength(255)
    title: string;

    @IsDateString()
    release: string;

    @IsInt()
    @Min(0)
    duration: number;

    @IsString()
    @MaxLength(1024)
    description: string;

    @IsString()
    @MaxLength(255)
    director: string;
}