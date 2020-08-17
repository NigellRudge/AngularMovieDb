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
    CastCardComponent
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
