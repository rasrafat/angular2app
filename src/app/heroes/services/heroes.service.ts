/*
 * This service is a factory for the heroes api.
 */

import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../common/services/api.service';
import { Hero } from '../models/hero.model';

@Injectable()
export class HeroesService {
    @Output() addEvent: EventEmitter<Hero> = new EventEmitter();

    constructor(private api: ApiService) { }

    private heroesUrl = 'src/app/heroes/models/heroes.json';
    private powersUrl = 'src/app/heroes/models/powers.json';

    getPowers(): Observable<any[]> {
        return this.api.get(this.powersUrl);
    }

    getHeroes(): Observable<Hero[]> {
        return this.api.get(this.heroesUrl);
    }

    addHero(hero: Hero): void {
        this.addEvent.emit(hero);
    }
}
