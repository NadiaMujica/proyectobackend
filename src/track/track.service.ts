import { Injectable } from "@nestjs/common";
import { Track } from './track.interface';

const BASE_URL = 'http://localhost:3030/tracks/';

@Injectable()
export class TrackService {
    async getTrackById(id: number): Promise<Track> {
        const res = await fetch (BASE_URL + id);
        const parsed = await res.json();
        return parsed;
    }
    async getTracks(): Promise <Track[]> {
        const res = await fetch (BASE_URL);
        const parsed = await res.json();
        return parsed;
    }

  }