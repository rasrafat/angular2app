import { Component } from '@angular/core';

// Add the RxJS Observable operators.
import '../common/rxjs-operators';

@Component({
  selector: 'heroes',
  template: `
    <hero-roster></hero-roster>
    <hero-form></hero-form>
  `,
})

export class HeroesComponent  { }
