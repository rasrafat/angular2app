import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

//import $ = require('jquery');

@Directive({
  selector: '[validation-tooltip]'
})

export class ValidationTooltipDirective implements OnInit {
   constructor(private el: ElementRef) {
     el.nativeElement.title = 'Hello';
     //console.log(el.nativeElement.title);

     let element = el.nativeElement;
     console.log(element);

     //console.log($(element));

     el.nativeElement.tooltip = {
       placement: 'top',
       animation: 'false',
       delay: { hide: 100 }
     };

     //$(element).attr('data-original-title', 'Hello world');
   }

   ngOnInit () {
     //el.nativeElement.attr('data-original-title', 'Hello world');
     //console.log(this.el.nativeElement);

     let element = this.el.nativeElement;
     console.log(element);
   }
}
