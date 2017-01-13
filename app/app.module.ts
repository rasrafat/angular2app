/*
 * Top level app module.
 * Import modules and components that comprise the app here.
 */

import { NgModule } from '@angular/core';

// import module component
import { AppComponent } from './app.component';

// import child modules
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports:      [ HeroesModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
