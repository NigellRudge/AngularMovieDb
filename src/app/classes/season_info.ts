import { Episode } from './episode';
import { Videos } from './videos';
import { Images } from './movie_images';

export interface SeasonInfo {
    _id: string;
    air_date: string;
    episodes: Episode[];
    name: string;
    overview: string;
    id: number;
    poster_path: string;
    season_number: number;
    images: Images;
    videos: Videos;
}
