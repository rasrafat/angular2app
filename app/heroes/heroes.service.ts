import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../common/api.service';
import { Hero } from './hero.model';

@Injectable()
export class HeroesService {
  constructor (private api: ApiService) { }

  private heroesUrl = 'app/heroes/heroes.json';

  getHeroes (): Observable<Hero[]> {
    return this.api.get(this.heroesUrl);
  }
}
