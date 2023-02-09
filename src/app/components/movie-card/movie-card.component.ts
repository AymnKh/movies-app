import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie";
import {Root} from "../home/home.component";
import {MoviesService} from "../../services/movies.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input('movie') movie!:Movie;

  constructor(private  moviesService:MoviesService, private  router:Router) {
  }
  getMovieVideos(id: number) {
    this.moviesService.getMovieVideos(id).subscribe((data: Root) => {
      console.log(data);
      let videos = data.results;
      videos.forEach(video => {
        if(video.type === 'Trailer') {
          window.open(`https://www.youtube.com/watch?v=${video.key}`, '_blank');
        }
      })
    })
  }

  movieDetails(id: number) {
    this.router.navigate(['/movie-details', id]);
  }
}
