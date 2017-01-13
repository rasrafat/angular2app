/*
 * This component is used to add a new hero to the Justice League.
 */

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../models/hero.model';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/heroes/components/hero-form.template.html'
})

export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(42, '', '');

  constructor (private heroesService: HeroesService) { }

  @ViewChild('heroForm') heroForm: NgForm;

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.heroesService.addHero(this.model);
    this.newHero();
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(42, '', '');
    this.heroForm.resetForm();
  }
}
