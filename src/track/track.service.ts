import { Injectable, NotFoundException } from "@nestjs/common";
import { Track } from './track.interface';

const BASE_URL = 'http://localhost:3030/tracks/';

@Injectable()
export class TrackService {

    async updateTrackById(id: number, body: Track): Promise<Track | undefined> {
        const isTrack: Track | undefined = await this.getTrackById(id);

        if (!isTrack || !Object.keys(isTrack).length) {
            console.warn(`Track con id ${id} no encontrado`);
            return;
        }

        const updatedTrack = { ...body, id };
        console.log('Pista actualizada', updatedTrack.title);

        const res = await fetch(BASE_URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTrack),
        });

        if (!res.ok) {
            console.log(`Error al actualizar: ${res.status}`);
            return;
        }
    }

    async deleteTrackById(id: number): Promise<Track> {
        const res = await fetch(BASE_URL + id, {
            method: 'DELETE',
        });
        const parsed = await res.json();
        return parsed;

    }

    async createTrack(track: Track): Promise<Track> {
        const idn = await this.setId();
        //const newTrack = {id, ...track}
        const newTrack: Track = {
            id: idn,
            title: track.title,
            duration: track.duration,
            artist: track.artist
        };
        const res = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(newTrack),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const parsed = await res.json();
        return parsed;
    }

    private async setId(): Promise<number> {
        const tracks = await this.getTracks();
        const id: number = tracks[tracks.length - 1].id + 1;
        //       = tracks[2].id(3) + 1
        return id; //=4
    }

    async getTrackById(id: number): Promise<Track | undefined> {
        const res = await fetch(BASE_URL + id);

        try {
            const parsed = await res.json();
            if (Object.keys(parsed).length) return parsed;
            
        } catch (err) {
            console.log(err)
            throw new NotFoundException(`Track con id ${id} no existe`);
        }
    }

    async getTracks(): Promise<Track[]> {
        const res = await fetch(BASE_URL);
        const parsed = await res.json();
        return parsed;
    }

}