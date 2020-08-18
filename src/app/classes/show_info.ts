import { ShowCredits } from './show_credits';
import { Videos } from './videos';
import { CreatedBy } from './created_by';
import { Genre } from './genre';
import { LastEpisodeToAir } from './last_episode_to_air';
import { Network } from './network';
import { ProductionCompany } from './production_company';
import { Season } from './season';
import { Images } from './movie_images';

export interface ShowInfo {
    backdrop_path: string;
    created_by: CreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisodeToAir;
    name: string;
    next_episode_to_air: any;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    seasons: Season[];
    status: string;
    type: string;
    vote_average: number;
    vote_count: number;
    credits: ShowCredits;
    images: Images;
    videos: Videos;
  }

