import { Component, Input } from '@angular/core';
import Movie from '../../models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input() movie!: Movie;
}
