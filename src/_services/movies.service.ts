import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieDto } from 'src/_models/movie';
import { ScreeningDto } from 'src/_models/screening';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = environment.apiUrl + 'Movies';
  constructor(private httpClient: HttpClient) { }

  getMoviesByTheater(theaterId: number) {
    return this.httpClient.get<MovieDto[]>(this.baseUrl + `/GetTheaterMovies?theaterId=${theaterId}`);
  }

  getMovieScreenings(movieId: number) {
    return this.httpClient.get<ScreeningDto[]>(this.baseUrl + `/Screenings?movieId=${movieId}`);
  }
}
