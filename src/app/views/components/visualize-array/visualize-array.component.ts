import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { $ } from 'protractor';
import { ArrayOperationsService } from '../../../services/array-operations.service';
import { Operations } from '../../model/Operations';
@Component({
  selector: 'app-visualize-array',
  templateUrl: './visualize-array.component.html',
  styleUrls: ['./visualize-array.component.scss']
})
export class VisualizeArrayComponent implements OnInit, AfterViewInit {

  constructor(private arrayOperations: ArrayOperationsService) { }
  array: Array<string>;
  isArrayCreated: Boolean;

  @Input() set arrayInput(value: string) {
    this.array = value.split(',');
    if (this.array.length > 0 ) {
      this.isArrayCreated = true;
    } else {
      this.isArrayCreated = false;
    }
  }

  @Input() arrayValue: string;
  @Input() arrayUpdateValue: string;
  @Input() arrayIndex: string;
  @Input() operation: string;
  @Input() set performOperation(value: Boolean) {
    if (value) {
      switch (this.operation) {
        case Operations.INSERT:
          console.log('before: ' + this.arrayValue)
          this.PerformInsertion(this.arrayValue);
          break;
        case Operations.INSERTATPOS:
          this.PerformInsertAtPosition(this.arrayValue, this.arrayIndex);
          break;
        case Operations.UPDATE:
          this.PerformUpdate(this.arrayValue, this.arrayUpdateValue);
          break;
        case Operations.DELETE:
          this.PerformDelete(this.arrayValue);
          break;
      }
      this.performOperation = false;
    }
  }

  @Output() arrayCreated = new EventEmitter<Boolean>();
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => this.arrayCreated.emit(this.isArrayCreated), 100);
  }

  PerformInsertion(value: string) {
    this.array.push('?');
    setTimeout(() => {
      this.array.pop();
      this.array = this.arrayOperations.Insert(this.array, value);
    }, 3000);
  }

  PerformInsertAtPosition(value: string, index: string) {
    this.arrayOperations.InsertAtPosition(this.array, value, index);
  }

  PerformUpdate(oldValue: string, newValue: string) {
    this.arrayOperations.Update(this.array, oldValue, newValue);
  }

  PerformDelete(value: string) {
    this.arrayOperations.Delete(this.array, value);
  }

}
