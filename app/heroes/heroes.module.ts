import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HeroesComponent } from './heroes.component';

import { HeroRosterComponent } from './hero-roster.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [ HeroesComponent, HeroRosterComponent, HeroFormComponent ],
  exports:      [ HeroesComponent ]
})

export class HeroesModule { }
