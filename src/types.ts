export interface City {
  name: string;
  id: string;
  lat: number;
  lon: number;
}

export type SortType = 'asc' | 'desc';

export interface Coord {
  lat: number;
  lng: number;
}

export interface Weather {
  name: string;
  id: string;
  temp: number;
  condition: string;
}
