import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDto } from 'src/_models/movie';
import { MoviesService } from 'src/_services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  theaterId: number;
  movies: MovieDto[];
  private sub: any;
  
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.theaterId = +params['theaterId'];
    });
    this.getScreening();
  }

  getScreening() {
    this.moviesService.getMoviesByTheater(this.theaterId).subscribe((data) => {
      this.movies = data;
    });
  }
}
