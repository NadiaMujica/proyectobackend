import { Get, Controller } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';

@Controller('track')
export class TrackController {
    
    constructor(private readonly trackService: TrackService) { }

    @Get()
    getTracks(): Promise <Track[]> {
        return this.trackService.getTracks();
    }
}
