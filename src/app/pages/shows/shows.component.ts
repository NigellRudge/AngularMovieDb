import { Component, OnInit, Input } from '@angular/core';
import { Show } from 'src/app/classes/show';
import { ShowService } from '../../services/show/show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  topRatedShows: Show[] = []
  nowAiringShows: Show[] = []

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.getTopRatedShows();
    this.getNowAiringShows();
  }

  private getTopRatedShows(): void {
    this.showService.getPopular()
        .subscribe(response => {
            this.topRatedShows = response.results;
      });
  }

  private getNowAiringShows(): void {
    this.showService.getNowAiring()
        .subscribe(response => {
          this.nowAiringShows = response.results;
        });
  }
}
