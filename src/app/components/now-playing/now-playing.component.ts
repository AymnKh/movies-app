import { Title } from '@angular/platform-browser';
import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MoviesService} from "../../services/movies.service";
import {Router} from "@angular/router";
import {Result} from "../../models/result";

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit{
  movies: Movie[] = [];
  p: number = 1;
  search!: string;
  constructor(private moviesService: MoviesService , private router:Router ,private title:Title) { }
  ngOnInit() {
    this.getNowPlayingMovies(); // Call the method to get the top rated movies
    this.moviesService.search.subscribe((search: string) => {
      this.search = search; // Set the search value to the search variable
    });
    this.title.setTitle('Now Playing'); // Set the title of the page
  }

  getNowPlayingMovies() {
    for (let i = 1; i < 10; i++) { // Get the top rated movies from page 1 to 10
      this.moviesService.getNowPlaying(i).subscribe((data: Result) => {
        let moviesTopRated = data.results; // Get the results from the API
        moviesTopRated.forEach(movie => {
          this.movies.push(movie); // Push the results to the movies array
        })
        // console.log(this.movies);
      });
    }
  }
  changPageSmooth() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); // Scroll to the top of the page
  }
}
