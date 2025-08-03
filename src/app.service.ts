import { Injectable } from '@nestjs/common';
/*
export interface iTrack {
  id: number,
  title: string,
  duration: number,
  artist: string
}

export const tracks: iTrack[] = [
  {
    id: 1,
    title: "cancion 1",
    duration: 120,
    artist: "interprete 1"
  },
    {
    id: 2,
    title: "cancion 2",
    duration: 130,
    artist: "interprete 2"
  },
    {
    id: 3,
    title: "cancion 3",
    duration: 220,
    artist: "interprete 3"
  }
]
*/

@Injectable()
export class AppService {
  getTracks(): string {
    return "hola";
  }
}
