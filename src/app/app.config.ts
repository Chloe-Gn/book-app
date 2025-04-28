import { ApplicationConfig, InjectionToken, LOCALE_ID } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const API_URL = new InjectionToken<string>('API_URL');
//creating a token named 'API_URL' that will be used to inject a string value

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      })
    ),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideAnimationsAsync(),
    { provide: API_URL, useValue: 'https://fakestoreapi.com' },
    provideHttpClient(),
  ],
};
