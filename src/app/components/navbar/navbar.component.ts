import { MoviesService } from './../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  search!: string;
  constructor(private moviesService: MoviesService) {
  }
  

  searchMovie() {
    this.moviesService.search.emit(this.search); // Emit the search value to the search observable
  }

}
