import { Get, Controller, Param, Post, Body, Delete, Put, HttpCode, Res, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';
import { TrackDto } from './track.dto';

@Controller('track')
export class TrackController {

    constructor(private readonly trackService: TrackService) { }

    @Get()
    getTracks(): Promise<Track[]> {
        return this.trackService.getTracks();
    }

    @Get(':id')
    getTrackById(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}),
    ) id: number,): Promise<Track | undefined> {
        return this.trackService.getTrackById(id);
    }

    @Post()
    createTrack(@Body() TrackDto: TrackDto): Promise<any> {
        return this.trackService.createTrack(TrackDto);
    }

    @Delete(':id')
    deleteTrackById(@Param('id') id: number): Promise<Track> {
        return this.trackService.deleteTrackById(id);
    }

    @Put(':id')
    @HttpCode(200)
    updateTrackById(@Param('id') id: number, @Body() body: Track): Promise<Track | undefined> {
        return this.trackService.updateTrackById(id, body);
    }

}
