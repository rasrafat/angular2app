import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[errors]'
})

export class ValidationErrorDirective {
  private appErrors = {
    required: 'Field is required.',
    name: 'Field is not a valid name.'
  };

  constructor(private el: ElementRef, private control : NgControl) { }

  @Input()
  set ngModel (model: any) {
    let ctrl = this.control.control;

    if (ctrl.dirty && !ctrl.valid) {
      let errors = [];
      for (const key in ctrl.errors) {
        errors.push(this.appErrors[key]);
      }
      this.errorsChange.emit(errors);
    } else {
      this.errorsChange.emit(null);
    }
  }

  @Output('errors') errorsChange: EventEmitter<string[]> = new EventEmitter();
}
