import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
    withInterceptors(httpInterceptorProviders)
  ),
    provideRouter(routes), 
    { provide: LOCALE_ID, useValue: 'fr-FR'},]
};
