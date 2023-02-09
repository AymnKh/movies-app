import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SafePipe } from './pipes/safe.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { PopularComponent } from './components/popular/popular.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    SafePipe,
    MovieCardComponent,
    PopularComponent,
    NowPlayingComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarComponent,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
