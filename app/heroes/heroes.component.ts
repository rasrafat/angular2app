/*
 * Heroes component - The Justice League.
 */

 import { Component, OnInit, Output } from '@angular/core';

 import { Hero } from './models/hero.model';
 import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'heroes',
  template: `
    <hero-roster [powers]="powers"></hero-roster>
    <hero-form [powers]="powers"></hero-form>
  `,
})

export class HeroesComponent implements OnInit  {
  @Output() powers: any[];

  private errorMessage: string;

  constructor (private heroesService: HeroesService) { }

  ngOnInit() {
    // initialize powers
    this.heroesService.getPowers().subscribe(
      powers => this.powers = powers,
      error  => this.errorMessage = <any>error
    );
  }
}
