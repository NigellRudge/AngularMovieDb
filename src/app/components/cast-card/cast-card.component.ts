import { Component, OnInit, Input } from '@angular/core';
import { Cast } from 'src/app/classes/cast';


@Component({
  selector: 'app-cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.css']
})
export class CastCardComponent implements OnInit {
  @Input() castMember: Cast;
  constructor() { }

  ngOnInit(): void {
    if(this.castMember.profile_path){
      this.castMember.profile_path = `https://image.tmdb.org/t/p/w500${this.castMember.profile_path}`;
    }
    else {
      this.castMember.profile_path = '../../../../assets/person_placeholder.png';
    }
  }

}
