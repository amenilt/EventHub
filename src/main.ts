import { bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

registerLocaleData(localeFr, 'fr-FR');

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withComponentInputBinding())],
}).catch((error: unknown) => console.error(error));
