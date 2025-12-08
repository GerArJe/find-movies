import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Movie } from '../../domain/models/movie/movie.model';

export const MovieApiActions = createActionGroup({
  source: 'Movie API',
  events: {
    'Get Featured Today Movies Success': props<{ movies: Movie[] }>(),
    'Get Featured Today Movies Failure': emptyProps(),
  },
});
