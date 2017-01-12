import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesModule } from './heroes/heroes.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HeroesModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
