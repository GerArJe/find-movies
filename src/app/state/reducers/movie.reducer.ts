import { createFeature, createReducer, on } from '@ngrx/store';

import { Movie } from '../../domain/models/movie/movie.model';
import { MovieApiActions } from '../actions/movie-api.actions';
import { MoviePageActions } from '../actions/movie-page.actions';

export interface MovieState {
  featuredTodayMovies: Movie[];
  loadingFeaturedToday: boolean;
  errorLoadingFeaturedToday: boolean;
}

const initialState: MovieState = {
  featuredTodayMovies: [],
  loadingFeaturedToday: true,
  errorLoadingFeaturedToday: false,
};

export const moviesFeature = createFeature({
  name: 'movies',
  reducer: createReducer(
    initialState,
    on(MoviePageActions.getFeaturedTodayMovies, (state) => ({
      ...state,
      loadingFeaturedToday: true,
      errorLoadingFeaturedToday: false,
    })),
    on(MovieApiActions.getFeaturedTodayMoviesSuccess, (state, { movies }) => ({
      ...state,
      featuredTodayMovies: movies,
      loadingFeaturedToday: false,
      errorLoadingFeaturedToday: false,
    })),
    on(MovieApiActions.getFeaturedTodayMoviesFailure, (state) => ({
      ...state,
      loadingFeaturedToday: false,
      errorLoadingFeaturedToday: true,
    }))
  ),
});

export const {
  selectErrorLoadingFeaturedToday,
  selectLoadingFeaturedToday,
  selectFeaturedTodayMovies,
} = moviesFeature;
