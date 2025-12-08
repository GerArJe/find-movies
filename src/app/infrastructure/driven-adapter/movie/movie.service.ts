import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';

import { MovieGateway } from '../../../domain/models/movie/gateway/movie.gateway';
import { Movie } from '../../../domain/models/movie/movie.model';
import { MovieResponse } from '../../utils/models/movie-response.model';
import { environment } from '../../../../environments/environment';
import { movieMapper } from '../../utils/mappers/movie.mapper';

@Injectable({
  providedIn: 'root',
})
export class MovieService extends MovieGateway {
  private _httpClient = inject(HttpClient);
  private _featuredTodayMoviesPage = 1;

  override getFeaturedTodayMovies(): Observable<Movie[]> {
    const url = new URL(environment.featuredTodayMoviesUrl);
    url.searchParams.append('page', this._featuredTodayMoviesPage.toString());
    return this._httpClient.get<MovieResponse>(url.toString()).pipe(
      map((response) => movieMapper(response)),
      tap(() => this._featuredTodayMoviesPage++)
    );
  }

  override getFeaturedTodaySeries(): Observable<Movie[]> {
    throw new Error('Method not implemented.');
  }
}
