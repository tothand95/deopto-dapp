import Select from 'react-select';
import { Component } from '@angular/core';
import type { ComponentProps } from 'react';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  Select = Select;
  selectProps: ComponentProps<Select> = {
    onChange(v) {
      console.log(v)
    },
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
  }
  
  changeProps() {
    this.selectProps = {
      ...this.selectProps,
      options: [{ value: 'changed', label: 'Changed' }]
    }
  }
}
