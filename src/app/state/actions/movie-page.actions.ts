import { createActionGroup, emptyProps } from '@ngrx/store';

export const MoviePageActions = createActionGroup({
  source: 'Movie Page',
  events: {
    'Get Featured Today Movies': emptyProps(),
  },
});
