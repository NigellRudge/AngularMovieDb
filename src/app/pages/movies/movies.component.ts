import { Component, OnInit } from '@angular/core';
import { Movie } from '../../classes/movie';
import { MovieService } from '../../services/movie/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getNowPlayingMovies();
  }

  private getPopularMovies(): void {
    this.movieService.getPopularMovies()
      .subscribe(response => {
        this.popularMovies = response.results;
        //console.log(response.results);
      });
  }

  private getNowPlayingMovies(): void {
    this.movieService.getNowPlayingMovies()
      .subscribe(response => {
        this.nowPlayingMovies = response.results;
        //console.log(response.results);
      });
  }

}
