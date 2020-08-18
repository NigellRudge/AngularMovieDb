import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { from } from 'rxjs';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/movie', pathMatch: 'full' },
  {path: 'movie', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'show', component: ShowsComponent},
  {path: 'show/:id', component: ShowDetailComponent},
  {path: 'actor', component: ActorsComponent},
  {path: 'actor/:id', component: ActorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
