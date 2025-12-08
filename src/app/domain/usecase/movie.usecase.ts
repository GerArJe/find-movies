import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { MovieGateway } from '../models/movie/gateway/movie.gateway';
import { Movie } from '../models/movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieUseCases {
  constructor(private _movieGateway: MovieGateway) {}

  getFeaturedTodayMovies(): Observable<Movie[]> {
    return this._movieGateway.getFeaturedTodayMovies();
  }

  getFeaturedTodaySeries(): Observable<Movie[]> {
    return this._movieGateway.getFeaturedTodaySeries();
  }
}
