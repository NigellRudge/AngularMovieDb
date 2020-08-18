import { Component, OnInit } from '@angular/core';
import { ShowInfo } from 'src/app/classes/show_info';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ShowService } from 'src/app/services/show/show.service';
import { Show } from 'src/app/classes/show';
import { MEDIA_URL } from 'src/app/services/config/config';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  show: ShowInfo;
  showId: number;
  similarShows: Show[];
  imageArrayLength = 10;
  constructor(private route: ActivatedRoute, private showService: ShowService) { }

  ngOnInit(): void {
    this.showId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`showId: ${this.showId}`);
    this.getShow();
  }

  getShow(): void{
    this.showService.getShowInfo(this.showId)
        .subscribe(response => {
          this.show = response;
          this.show.poster_path = `${MEDIA_URL}${this.show.poster_path}`;
          //console.log(`poster Path: ${this.show.poster_path}`);
          if(this.show.images.backdrops.length < 10){
            this.imageArrayLength = this.show.images.backdrops.length;
          }
          this.getSimilarShows(this.showId);
    });
  }

  private getSimilarShows(showId: number): void{
    this.showService.getSimilarShows(showId)
        .subscribe(data => {
            console.log(data);
            this.similarShows = data.results.length > 5 ? data.results.slice(0, 5) : data.results;
        });
  }
}
