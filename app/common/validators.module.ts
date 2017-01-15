/*
 * Aggregate of all common validation directives.
 */

import { NgModule } from '@angular/core';

// import child validation directives
import {
  NameValidatorDirective
} from './directives/validators.directive';

@NgModule({
  declarations: [
    NameValidatorDirective
  ],
  exports: [
    NameValidatorDirective
  ]
})

export class ValidatorsModule { }
