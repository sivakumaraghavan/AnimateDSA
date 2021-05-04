import { Injectable } from '@angular/core';
import { IArray } from '../interface/IArray';

@Injectable({
  providedIn: 'root'
})
export class ArrayOperationsService implements IArray {

  constructor() { }
  Insert(array: any[], value: any): any[] {
    array.push(value);
    return array;
  }
  InsertAtPosition(array: any[], value: any, index: any): any[] {
    throw new Error('Method not implemented.');
  }
  Update(array: any[], oldValue: any, newValue: any): any[] {
    throw new Error('Method not implemented.');
  }
  Delete(array: any[], value: any): any[] {
    throw new Error('Method not implemented.');
  }
}
