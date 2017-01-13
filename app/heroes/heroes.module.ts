/*
 * Heroes module - The Justice League.
 */

import { NgModule } from '@angular/core';

// import angular dependencies
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import dependent modules
import { ServicesModule } from '../common/services.module';

// import module component
import { HeroesComponent } from './heroes.component';

// import child components
import { HeroRosterComponent } from './components/hero-roster.component';
import { HeroFormComponent } from './components/hero-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ServicesModule ],
  declarations: [ HeroesComponent, HeroRosterComponent, HeroFormComponent ],
  exports:      [ HeroesComponent ]
})

export class HeroesModule { }
