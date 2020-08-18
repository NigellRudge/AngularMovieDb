import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShowResponse } from '../../classes/show_response';
import { BASE_URL, API_KEY } from '../config/config';
import { GenreResponse } from 'src/app/classes/genre_response';
import { ShowInfo } from 'src/app/classes/show_info';
import { SeasonInfo } from 'src/app/classes/season_info';
import { EpisodeInfo } from 'src/app/classes/episode_info';
@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) { }

  getNowAiring(page: number = 1): Observable<ShowResponse>{
    const url = `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&page=${page}`;
    console.log(`url nowAiring: ${url}`);
    return this.httpClient.get<ShowResponse>(url);
  }

  getTopRated(page: number = 1): Observable<ShowResponse>{
    const url = `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&page=${page}`;
    console.log(`toprated tv: ${url}`);
    return this.httpClient.get<ShowResponse>(url);
  }

  getPopular(page: number = 1): Observable<ShowResponse>{
    const url = `${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${page}`;
    console.log(`popuar tv: ${url}`);
    return this.httpClient.get<ShowResponse>(url);
  }

  getGenres(): Observable<GenreResponse>{
    const url = `${BASE_URL}/genre/tv/list?api_key${API_KEY}`;
    console.log(`genres: ${url}`);
    return this.httpClient.get<GenreResponse>(url);
  }

  getPerGenre(genreId: number, page: number = 1): Observable<ShowResponse> {
    const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genre=${genreId}&page=${page}`;
    console.log(`genres: ${url}`);
    return this.httpClient.get<ShowResponse>(url);
  }

  getShowInfo(showId: number): Observable<ShowInfo>{
    const  url = `${BASE_URL}/tv/${showId}?api_key=${API_KEY}&append_to_response=credits,images,videos`;
    return this.httpClient.get<ShowInfo>(url);
  }

  getSeasonInfo(showId: number, seasonId: number): Observable<SeasonInfo>{
    const url = `${BASE_URL}/tv/${showId}/season/${seasonId}?api_key=${API_KEY}&append_to_response=images,videos`;
    return this.httpClient.get<SeasonInfo>(url);
  }

  getEpisodeInfo(showId: number, seasonId: number, episode: number): Observable<EpisodeInfo>{
    const url = `${BASE_URL}/tv/${showId}/season/${seasonId}?api_key=${API_KEY}&append_to_response=images,videos`;
    return this.httpClient.get<EpisodeInfo>(url);
  }

  getSimilarShows(showId: number, page: number = 1): Observable<ShowResponse>{
    const url = `${BASE_URL}/tv/${showId}/similar?api_key=a28d205a378cece6baa18ba20119765b&language=en-US&page=${page}`;
    return this.httpClient.get<ShowResponse>(url);
  }

}
