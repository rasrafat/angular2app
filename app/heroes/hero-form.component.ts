import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from './hero.model';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/heroes/hero-form.template.html'
})

export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  @ViewChild('heroForm') heroForm: NgForm;

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(42, '', '');
    this.heroForm.reset();
  }
}
