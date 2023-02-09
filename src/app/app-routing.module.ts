import { DetailsResolver } from './resolver/details.resolver';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PopularComponent} from "./components/popular/popular.component";
import {NowPlayingComponent} from "./components/now-playing/now-playing.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'popular',component:PopularComponent},
  {path:'now-playing',component:NowPlayingComponent},
  { path: 'movie-details/:id', component: MovieDetailsComponent, resolve: { movieDetails: DetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
