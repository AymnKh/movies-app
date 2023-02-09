import { Root } from './../components/home/home.component';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  search = new EventEmitter<string>();
  url = 'https://api.themoviedb.org/3/movie/';
  apiKey = 'api_key=53863d3939659f1da83139fdb1862345';
  constructor(private http: HttpClient) { }
  getTopRatedMovies(page: number): Observable<Result> {
    return this.http.get<Result>(`${this.url}top_rated?${this.apiKey}&language=en-US&page=${page}`);
  }
  getMovieVideos(id: number): Observable<Root> {
    return this.http.get<Root>(`${this.url}${id}/videos?${this.apiKey}&language=en-US`)
  }
  getMovieDetails(id: number) {
    return this.http.get(`${this.url}${id}?${this.apiKey}&language=en-US`);
  }
  getPopularMovies(page: number): Observable<Result> {
    return this.http.get<Result>(`${this.url}popular?${this.apiKey}&language=en-US&page=${page}`)
  }
  getNowPlaying(page: number): Observable<Result> {
    return this.http.get<Result>(`${this.url}now_playing?${this.apiKey}&language=en-US&page=${page}`)
  }

  getRecommendationsMovies(id: number): Observable<Result> {
    return this.http.get<Result>(`${this.url}${id}/recommendations?${this.apiKey}&language=en-US&page=1`);
  }
}
