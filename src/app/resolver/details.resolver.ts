import { MovieDetails } from './../models/movie-details';
import { MoviesService } from './../services/movies.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsResolver implements Resolve<MovieDetails> {
  constructor(private moviesService:MoviesService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.moviesService.getMovieDetails(route.params['id']);
  }
}
