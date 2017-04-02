import { Directive, ElementRef, EventEmitter, Input, Output, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[errors]'
})

export class ValidationErrorDirective {
    private appErrors = {
        required: 'Field is required.',
        name: 'Field is not a valid name.'
    };

    constructor(private el: ElementRef, private control: NgControl, private render: Renderer) { }

    @Input()
    set ngModel(model: any) {
        let ctrl = this.control.control;

        if (ctrl.dirty && !ctrl.valid) {
            let errors: any = [];
            for (const key in ctrl.errors) {
                errors.push(this.appErrors[key]);
            }
            this.render.setElementClass(this.el.nativeElement.parentNode, 'has-error', true);
            this.errorsChange.emit(errors);
        } else {
            this.render.setElementClass(this.el.nativeElement.parentNode, 'has-error', false);
            this.errorsChange.emit(null);
        }
    }

    @Output('errors') errorsChange: EventEmitter<string[]> = new EventEmitter();
}
