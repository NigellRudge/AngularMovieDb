import { Videos } from './videos';
export interface EpisodeInfo {
    air_date: string;
    crew: Crew[];
    episode_number: number;
    guest_stars: GuestStar[];
    name: string;
    overview: string;
    id: number;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
    images: Images;
    videos: Videos;
  }

interface Crew {
  id: number;
  credit_id: string;
  name: string;
  department: string;
  job: string;
  gender: number;
  profile_path: any;
}

interface GuestStar {
  id: number;
  name: string;
  credit_id: string;
  character: string;
  order: number;
  gender: number;
  profile_path?: string;
}

interface Images {
  stills: Still[];
}

interface Still {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: any;
    vote_average: number;
    vote_count: number;
    width: number;
}
