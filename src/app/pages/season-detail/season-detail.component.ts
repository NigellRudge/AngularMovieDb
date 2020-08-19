import { Component, OnInit } from '@angular/core';
import { SeasonInfo } from 'src/app/classes/season_info';
import { ShowService } from 'src/app/services/show/show.service';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { MEDIA_URL } from 'src/app/services/config/config';
import { Show } from 'src/app/classes/show';
import { ShowInfo } from 'src/app/classes/show_info';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {
  season: SeasonInfo;
  show: ShowInfo;
  seasonId: number;
  showId: number;
  constructor(private showService: ShowService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showId = Number(this.route.snapshot.paramMap.get('showId'));
    this.seasonId = Number(this.route.snapshot.paramMap.get('seasonId'));
    this.getShowInfo();
  }

  getSeasonInfo(): void{
      this.showService.getSeasonInfo(this.showId, this.seasonId)
          .subscribe(response => {
            this.season = response;
            if(this.season.poster_path){
              this.season.poster_path = `${MEDIA_URL}${this.season.poster_path}`;
            }
            else{
              this.season.poster_path = `${MEDIA_URL}${this.show.poster_path}`;
            }
            this.season.episodes.forEach( episode => {
              episode.still_path = `${MEDIA_URL}${episode.still_path}`;
            });
            this.season.images.posters.forEach(poster => {
                poster.file_path = `${MEDIA_URL}${poster.file_path}`;
                console.log(`poster: ${poster.file_path}`);
            });
          });
  }

  getShowInfo(): void{
      this.showService.getShowInfo(this.showId)
          .subscribe(show => {
            this.show = show;
            this.getSeasonInfo();
      });
  }
}
