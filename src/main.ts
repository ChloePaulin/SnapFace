import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
// Import du français depuis angular
import * as fr from '@angular/common/locales/fr';
// Mettre le français en langue par défaut.
registerLocaleData(fr.default);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
