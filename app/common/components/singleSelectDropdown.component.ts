import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractValueAccessor, AccessorProvider } from '../library/abstractValueAccessor';

@Component({
  selector: 'ix-dropdown-single[ngModel]',
  templateUrl: 'app/common/components/singleSelectDropdown.template.html',
  providers: [ AccessorProvider(SingleSelectDropdownComponent) ],
  host: {'(selectedChange)': 'onChange($event)'},
})

export class SingleSelectDropdownComponent extends AbstractValueAccessor {
  @Input() items: any[] = [];
  @Input() options: { itemValue: string; itemLabel : string };

  @Output() selectedChange: EventEmitter<any>;

  private selectionLabel: string;

  constructor() {
    super();
    this.selectedChange = new EventEmitter();
    this.selectionLabel = 'Make a selection';
  }

  writeValue(value: any) {
    super.writeValue(value);
    this.selectionLabel = this.getLabel(value);

    if (this.selectionLabel === null) {
      this.selectionLabel = 'Make a selection';
      this.selectedChange.emit(null);
    }
  }

  getLabel (value: any) : string {
    if (!this.items) {
      return null;
    }

    for (let item of this.items) {
      if (item[this.options.itemValue] === value) {
        return item[this.options.itemLabel];
      }
    }

    return null;
  }

  select(item: any) {
    this.selectionLabel = item[this.options.itemLabel];
    this.selectedChange.emit(item[this.options.itemValue]);
  }
}
