import { Component, Input, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';
import Movie from '../../models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  @Input() title: string = '';
  popularMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getPopular()
      .subscribe(
        (data) =>
          (this.popularMovies = data.results.slice(
            this.title === 'Popular movies' ? 0 : 6,
            12
          ))
      );
  }
}
