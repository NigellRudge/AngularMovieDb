import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/classes/movie';
import { MEDIA_URL } from 'src/app/services/config/config';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {
      
   }

  ngOnInit(): void {
    this.movie.poster_path = `${MEDIA_URL}${this.movie.poster_path}`;
    
  }

}
