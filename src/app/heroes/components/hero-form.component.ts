/*
 * This component is used to add a new hero to the Justice League.
 */

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../models/hero.model';
import { HeroesService } from '../services/heroes.service';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.template.html'
})

export class HeroFormComponent implements OnInit {
    errorMessage: string;
    model: Hero;

    constructor(private heroesService: HeroesService) { }

    @Input() powers: any[] = [];

    @ViewChild('heroForm') heroForm: NgForm;

    ngOnInit() {
        this.model = new Hero(42, '', undefined);
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
        this.heroesService.addHero(this.model);
        this.newHero();
    }

    newHero() {
        this.model = new Hero(42, '', null);
        this.heroForm.reset();
    }
}
