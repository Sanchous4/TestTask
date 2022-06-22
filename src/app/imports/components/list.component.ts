import { Component, OnInit, Input } from '@angular/core';
import { option } from '../types/options';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  options: option[] = [{ id: 0, name: 'Nothing selected', disabled: true }];
  selectedValue = 0;

  constructor() {}

  ngOnInit(): void {}

  @Input('options') set changeOptions(availableOptions: option[]) {
    for (let i = 0; i < availableOptions.length; i++) {
      const newOption: option = availableOptions[i];
      if (newOption.id && newOption.name) {
        this.options.push({
          id: newOption.id,
          name: newOption.name,
          disabled: false,
        });
      }
    }
  }

  @Input('default') set changeDefaultOption(name: string) {
    this.options[0].name = name;
  }
}
