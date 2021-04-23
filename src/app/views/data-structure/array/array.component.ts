import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupName,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }
  arrayVisualize: FormGroup;
  IsArrayCreated: boolean;
  array: string;
  ngOnInit(): void {
    this.IsArrayCreated = false;
    this.arrayVisualize = this.formBuilder.group({
      array: ["", Validators.required]
    })
  }

  CreateArray() {
    this.array = "";
    this.array = this.arrayVisualize.controls.array.value;
  }

}
