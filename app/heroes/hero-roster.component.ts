import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';

import { ApiService } from '../common/api.service';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'hero-roster',
  templateUrl: 'app/heroes/hero-roster.template.html',
  providers: [ ApiService, HeroesService ],
})

export class HeroRosterComponent implements OnInit {
  heroes: Hero[];
  errorMessage: string;

  constructor (private heroesService: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes()
                      .subscribe(
                        heroes => this.heroes = heroes,
                        error =>  this.errorMessage = <any>error);
  }
}
