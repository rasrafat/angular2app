import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ix-dropdown-single',
  templateUrl: 'app/common/components/singleSelectDropdown.template.html'
})

export class SingleSelectDropdownComponent {
  @Input() items: any[] = [];
  @Input() options: { itemValue: string; itemLabel : string };

  @Input() selected: any;
  @Output() selectedChange: EventEmitter<any>;

  private selectionLabel: string;

  constructor(private el: ElementRef) {
    this.selectedChange = new EventEmitter();
    this.selectionLabel = 'Make a selection';
  }

  select(item: any) {
    this.selectionLabel = item[this.options.itemLabel];
    this.selectedChange.emit(item[this.options.itemValue]);
  }
}
