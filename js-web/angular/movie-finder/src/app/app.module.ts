import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeJumbotronComponent } from './components/home-jumbotron/home-jumbotron.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  declarations: [AppComponent, HomeJumbotronComponent, MovieListComponent, MovieItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
