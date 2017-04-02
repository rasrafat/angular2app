/*
 * Bootstraps the Angular application.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// import top module
import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
    enableProdMode();
}

// bootstrap application
platformBrowserDynamic().bootstrapModule(AppModule);
