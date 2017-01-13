/*
 * Heroes component - The Justice League.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'heroes',
  template: `
    <hero-roster></hero-roster>
    <hero-form></hero-form>
  `,
})

export class HeroesComponent  { }
