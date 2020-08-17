import { Component, OnInit } from '@angular/core';
import { MovieInfo } from 'src/app/classes/movie_info';
import { MovieService } from 'src/app/services/movie/movie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from 'src/app/classes/movie';
import { MEDIA_URL } from 'src/app/services/config/config';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: MovieInfo;
  movieId: number;
  similarMovies: Movie[];
  imageArrayLength = 10;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    // console.log(this.movieId);
    this.getMovie(this.movieId);
  }

  private getMovie(movieId: number): void {
    this.movieService.getMovieDetails(movieId)
      .subscribe(movie => {
        console.log(movie.images.backdrops);
        this.movie = movie;
        this.movie.poster_path = MEDIA_URL + this.movie.poster_path;
        if(this.movie.images.backdrops.length < 10){
          this.imageArrayLength = this.movie.images.backdrops.length;
        }

        this.getSimilarMovies(this.movie.id);
      });
  }

  private getSimilarMovies(movieId: number): void{
    this.movieService.getSimilarMovies(movieId)
        .subscribe(data => {
            console.log(data);
            this.similarMovies = data.results.length > 5 ? data.results.slice(0, 5) : data.results;
        });
  }
}
