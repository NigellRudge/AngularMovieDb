import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../classes/show';
import { MEDIA_URL } from 'src/app/services/config/config';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {
  @Input()
  show: Show;
  constructor() { }

  ngOnInit(): void {
    this.show.poster_path = `${MEDIA_URL}${this.show.poster_path}`;
  }

}
