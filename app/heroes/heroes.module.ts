/*
 * Heroes module - The Justice League.
 */

import { NgModule } from '@angular/core';

// import angular dependencies
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import dependent modules
import { ServicesModule } from '../common/services.module';

// import dependent services
import { HeroesService } from './services/heroes.service';

// import dependent components
import { SingleSelectDropdownComponent } from '../common/components/singleSelectDropdown.component'

// import module component
import { HeroesComponent } from './heroes.component';

// import child components
import { HeroRosterComponent } from './components/hero-roster.component';
import { HeroFormComponent } from './components/hero-form.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ServicesModule
  ],
  declarations: [
    SingleSelectDropdownComponent,
    HeroesComponent,
    HeroRosterComponent,
    HeroFormComponent
  ],
  providers:    [ HeroesService ],
  exports:      [ HeroesComponent ],
})

export class HeroesModule { }
