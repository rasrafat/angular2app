/*
 * This service is a factory for the heroes api.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../common/services/api.service';
import { Hero } from '../models/hero.model';

@Injectable()
export class HeroesService {
  constructor (private api: ApiService) { }

  private heroesUrl = 'app/heroes/models/heroes.json';

  getHeroes (): Observable<Hero[]> {
    return this.api.get(this.heroesUrl);
  }
}
