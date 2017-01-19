/*
 * This component manages the roster of Justice League super heroes.
 */

import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../models/hero.model';
import { HeroesService } from '../services/heroes.service';

@Component({
    selector: 'hero-roster',
    templateUrl: 'app/heroes/components/hero-roster.template.html'
})

export class HeroRosterComponent implements OnInit {
    powersMap = {};
    heroes: Hero[];
    errorMessage: string;

    constructor(private heroesService: HeroesService) { }

    @Input()
    set powers(powers: any[]) {
        // recreate powersMap on powers update
        if (powers !== undefined) {
            powers.forEach(
                power => this.powersMap[power.powerID] = power.name
            );
        }
    }

    ngOnInit() {
        // initialize heros
        this.heroesService.getHeroes().subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any>error
        );

        // Update heroes on add hero event
        this.heroesService.addEvent.subscribe(
            (hero: Hero) => this.heroes.push(hero)
        );
    }
}
