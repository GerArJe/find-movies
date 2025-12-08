import { inject, Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { MovieState, selectFeaturedTodayMovies } from '../reducers/movie.reducer';
import { MoviePageActions } from '../actions/movie-page.actions';

@Injectable({
  providedIn: 'root',
})
export class MovieStateService {
  private _store = inject(Store<MovieState>);
  readonly featuredTodayMovies$ = this._store.select(selectFeaturedTodayMovies);

  getFeaturedTodayMovies(): void {
    this._store.dispatch(MoviePageActions.getFeaturedTodayMovies());
  }
}
