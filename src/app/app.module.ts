import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { CastCardComponent } from './components/cast-card/cast-card.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { SeasonCardComponent } from './components/season-card/season-card.component';
import { SeasonDetailComponent } from './pages/season-detail/season-detail.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';
import { ActorDetailComponent } from './pages/actor-detail/actor-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoviesComponent,
    ShowsComponent,
    ActorsComponent,
    FooterComponent,
    MovieCardComponent,
    MovieDetailComponent,
    CastCardComponent,
    ShowCardComponent,
    ShowDetailComponent,
    SeasonCardComponent,
    SeasonDetailComponent,
    EpisodeCardComponent,
    EpisodeDetailComponent,
    ActorDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
