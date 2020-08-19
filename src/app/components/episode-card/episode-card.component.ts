import { Component, OnInit, Input } from '@angular/core';
import { Episode } from 'src/app/classes/episode';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent implements OnInit {
  @Input()
  episode: Episode;
  @Input()
  season: number;
  episodeString = '';

  constructor() { }

  ngOnInit(): void {
    const s = this.season > 9 ? ('S' + String(this.season)) : ('S0' + String(this.season));
    const e = this.episode.episode_number > 9 ? ('E' + String(this.episode.episode_number)) : ('E0' + String(this.episode.episode_number));
    this.episodeString = `${s}${e}`;
  }

}
