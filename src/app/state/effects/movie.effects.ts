import { inject } from '@angular/core';
import { exhaustMap } from 'rxjs/internal/operators/exhaustMap';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { MovieUseCases } from '../../domain/usecase/movie.usecase';
import { MoviePageActions } from '../actions/movie-page.actions';
import { MovieApiActions } from '../actions/movie-api.actions';

export const getFeaturedTodayMovies = createEffect(
  (actions$ = inject(Actions), movieUseCases = inject(MovieUseCases)) => {
    return actions$.pipe(
      ofType(MoviePageActions.getFeaturedTodayMovies),
      exhaustMap(() =>
        movieUseCases.getFeaturedTodayMovies().pipe(
          map((movies) => MovieApiActions.getFeaturedTodayMoviesSuccess({ movies })),
          catchError(() => of(MovieApiActions.getFeaturedTodayMoviesFailure()))
        )
      )
    );
  },
  { functional: true }
);
