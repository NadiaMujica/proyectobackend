import { Injectable } from "@nestjs/common";
import { Track } from './track.interface';

const BASE_URL = 'http://localhost:3000/tracks';

@Injectable()
export class TrackService {
    async getTracks(): Promise <Track[]> {
        const res = await fetch (BASE_URL);
        const parsed = await res.json();
        return parsed;
    }

  }