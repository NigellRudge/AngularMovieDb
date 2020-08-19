import { Component, OnInit, Input } from '@angular/core';
import { Season } from 'src/app/classes/season';
import { MEDIA_URL } from 'src/app/services/config/config';

@Component({
  selector: 'app-season-card',
  templateUrl: './season-card.component.html',
  styleUrls: ['./season-card.component.css']
})
export class SeasonCardComponent implements OnInit {
  @Input()
  show: number;
  @Input()
  season: Season;
  @Input()
  showPoster = '';
  constructor() { }

  ngOnInit(): void {
    if(this.season.poster_path){
      this.season.poster_path = `${MEDIA_URL}${this.season.poster_path}`;
    }
    else {
      this.season.poster_path = this.showPoster;
    }
  }
}
