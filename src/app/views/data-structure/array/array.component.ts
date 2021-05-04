import { Operations } from './../../model/Operations';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  arrayVisualize: FormGroup;
  IsArrayCreated: Boolean;
  performAction: Boolean;
  IsPerformAction: Boolean;
  array: string;
  keys = Object.keys;
  arrayOperations = Operations;
  ngOnInit(): void {
    this.IsArrayCreated = false;
    this.arrayVisualize = this.formBuilder.group({
      array: ['', Validators.required],
      operations: ['', Validators.required],
      arrayValue: ['', Validators.required],
      arrayIndex: ['', Validators.required],
      arrayUpdateValue: ['', Validators.required]
    });

  }

  CreateArray() {
    this.array = '';
    this.array = this.arrayVisualize.controls.array.value;
  }

  performArrayOperations(isArrayCreated: Boolean) {
    this.performAction = isArrayCreated;
  }

  changeOperation($event: any) {
    this.IsPerformAction = false;
    this.arrayVisualize.controls.operations.setValue($event.target.value);
  }

  performArrayOperation() {
    this.IsPerformAction = true;
  }
}
