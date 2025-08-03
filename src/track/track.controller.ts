import { Get, Controller, Param } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';

@Controller()
export class TrackController {

    constructor(private readonly trackService: TrackService) { }

    @Get('track')
    getTracks(): Promise<Track[]> {
        return this.trackService.getTracks();
    }
    @Get('track/:id')
    getTrackById(@Param('id') id: number): Promise<Track> {
        return this.trackService.getTrackById(id);
    }

}
