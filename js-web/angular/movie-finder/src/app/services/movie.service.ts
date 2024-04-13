import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Movie from '../models/movie';

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = '&api_key=fe02a5500771d96163457fe64625bb7e';
const POPULAR_ENDPOINT = 'discover/movie?sort_by=popularity.desc';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopular() {
    return this.http.get<{ results: Movie[] }>(
      `${BASE_URL}${POPULAR_ENDPOINT}${API_KEY}`
    );
  }

  getInTheaters() {
    return this.http.get<{ results: Movie[] }>(
      `${BASE_URL}${POPULAR_ENDPOINT}${API_KEY}&with_release_type=2|3`
    );
  }
}
