import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

function ValidatorProviders(directive: any) {
  return [{provide: NG_VALIDATORS, useExisting: directive, multi: true}];
}

@Directive({
  selector: '[nameValidation]',
  providers: ValidatorProviders(NameValidatorDirective)
})
export class NameValidatorDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} {
    let regex = /^[\x20\x2C-\x2EA-Za-z]*$/;
    return regex.test(control.value) ? null : { name: false };
  }
}
