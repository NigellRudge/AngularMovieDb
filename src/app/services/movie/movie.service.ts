import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, API_KEY, MEDIA_URL} from '../config/config';
import { Observable } from 'rxjs';
import { MovieResponse } from '../../classes/movie_response';
import { MovieInfo } from '../../classes/movie_info';
import { Genre } from 'src/app/classes/genre';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private base_url = `${BASE_URL}/movie`;

  constructor(private http: HttpClient) { }

  public getPopularMovies(page: number = 1): Observable<MovieResponse>{
    const url = `${this.base_url}/popular?api_key=${API_KEY}&page=${page}`;
    return this.http.get<MovieResponse>(url);
  }

  public getNowPlayingMovies(page: number = 1): Observable<MovieResponse>{
    const url = `${this.base_url}/now_playing?api_key=${API_KEY}&page=${page}`;
    console.log(`url:${url}`);
    return this.http.get<MovieResponse>(url);
  }

  public getMovieDetails(movieId: number): Observable<MovieInfo>{
    const url = `${this.base_url}/${movieId}?api_key=${API_KEY}&append_to_response=images,credits,videos`;
    //console.log(`url called: ${url}`);
    return this.http.get<MovieInfo>(url);
  }

  public getMovieGenres(): Observable<Genre[]>{
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    return this.http.get<Genre[]>(url);
  }

  public getTopRatedrMovies(page: number = 1): Observable<MovieResponse>{
    const url = `${this.base_url}/top_rated?api_key=${API_KEY}&page=${page}`;
    return this.http.get<MovieResponse>(url);
  }

  public searchMovie(query: string, page: number = 1 ): Observable<MovieResponse>{
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
    return this.http.get<MovieResponse>(url);
  }

  public getSimilarMovies(movieId: number, page: number = 1): Observable<MovieResponse>{
    const url = `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&page=${page}`;
    console.log(url);
    return this.http.get<MovieResponse>(url);
  }
}
