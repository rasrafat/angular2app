/*
 * Aggregate of all common validation directives.
 */

import { NgModule } from '@angular/core';

// import child validation directives
import {
  NameValidatorDirective
} from './directives/validators.directive';

import { ValidationErrorDirective } from './directives/validationError.directive';

@NgModule({
  declarations: [
    NameValidatorDirective,
    ValidationErrorDirective
  ],
  exports: [
    NameValidatorDirective,
    ValidationErrorDirective
  ]
})

export class ValidatorsModule { }
