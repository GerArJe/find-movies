import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import * as moviesEffects from './state/effects/movie.effects';
import { routes } from './app.routes';
import { moviesFeature } from './state/reducers/movie.reducer';
import { authTokenInterceptor } from './infrastructure/interceptors/auth-token-interceptor';
import { MovieGateway } from './domain/models/movie/gateway/movie.gateway';
import { MovieService } from './infrastructure/driven-adapter/movie/movie.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore(),
    provideState(moviesFeature),
    provideEffects(moviesEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withInterceptors([authTokenInterceptor])),
    { provide: MovieGateway, useClass: MovieService },
  ],
};
