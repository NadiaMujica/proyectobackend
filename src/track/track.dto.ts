import { IsInt, IsString } from "class-validator";

export class TrackDto {
    @IsString()
    title: string;
    @IsInt()
    duration: number;
    @IsString()
    artist: string;
}