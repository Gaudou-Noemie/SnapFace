import { ApplicationConfig, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptorProviders } from './core/interceptors';
import { CoreModule } from './core/core.module';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
    withInterceptors(httpInterceptorProviders)
  ),
  importProvidersFrom(CoreModule),
    provideRouter(routes), 
    { provide: LOCALE_ID, useValue: 'fr-FR'},]
};
