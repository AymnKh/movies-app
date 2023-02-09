import { Result } from './../../models/result';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

export interface Root {
  id: number
  results: MovieVideos[]
}

export interface MovieVideos {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  p: number = 1;
  search!: string;
  constructor(private moviesService: MoviesService , private router:Router , private title:Title) { }

  ngOnInit(): void {
    this.getTopRatedMovies(); // Call the method to get the top rated movies
    this.moviesService.search.subscribe((search: string) => { // Subscribe to the search observable
      this.search = search; // Set the search value to the search variable
    });
    this.title.setTitle('Home'); // Set the title of the page
  }

  getTopRatedMovies() {
    for (let i = 1; i < 10; i++) { // Get the top rated movies from page 1 to 10
      this.moviesService.getTopRatedMovies(i).subscribe((data: Result) => {
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
    });
  }

}
