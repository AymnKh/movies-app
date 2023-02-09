import { Title } from '@angular/platform-browser';
import { Result } from './../../models/result';
import { Movie } from './../../models/movie';
import { OwlOptions } from './../../../../node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';
import { Root } from './../home/home.component';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/movie-details';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id!: number;
  movieDetails!: MovieDetails;
  recommendations: Movie[] = [];
  movieVideos: string[] = [];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    animateIn: 'fadeIn',
    autoplayMouseleaveTimeout: 300,
    touchDrag: true,
    navSpeed: 1000,
    slideBy: 1,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
  }
  constructor(private route: ActivatedRoute, private moviesService: MoviesService , private title:Title) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => { // Get the data from the resolver
      // console.log(data['movieDetails']); 
      this.movieDetails = data['movieDetails']; // Set the data to the movieDetails variable
    })
    this.getMovieVideos(this.movieDetails.id); // Call the method to get the movie videos
    this.getRecomendedMovies(this.movieDetails.id); // Call the method to get the recomended movies
    this.title.setTitle(this.movieDetails.title); // Set the title of the page
  }

  getMovieVideos(id: number) {
    this.moviesService.getMovieVideos(id).subscribe((data: Root) => { 
      let videos = data.results; // Get the results from the API
      this.movieVideos = videos.map(video => `https://www.youtube.com/embed/${video.key}`); // Map the results to get the videos

    })
  }

  getRecomendedMovies(id: number) {
    this.moviesService.getRecommendationsMovies(id).subscribe((data: Result) => {
      let recmoend = data.results; // Get the results from the API
      recmoend.forEach(movie => { // Loop through the results
        this.recommendations.push(movie); // Push the results to the recommendations array
      })
    })
  }


}
