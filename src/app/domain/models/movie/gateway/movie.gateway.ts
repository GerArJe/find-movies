import { Observable } from 'rxjs/internal/Observable';

import { Movie } from '../movie.model';

export abstract class MovieGateway {
  abstract getFeaturedTodayMovies(): Observable<Movie[]>;
  abstract getFeaturedTodaySeries(): Observable<Movie[]>;
}
