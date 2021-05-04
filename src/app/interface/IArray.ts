export interface IArray {
    Insert(array: Array<any>, value: any): Array<any>;
    InsertAtPosition(array: Array<any>, value: any, index: Number): Array<any>;
    Update(array: Array<any>, oldValue: any, newValue: any): Array<any>;
    Delete(array: Array<any>, value: any): Array<any>;
}