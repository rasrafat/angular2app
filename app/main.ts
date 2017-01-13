/*
 * Bootstraps the Angular application.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import top module
import { AppModule } from './app.module';

// bootstrap application
platformBrowserDynamic().bootstrapModule(AppModule);
