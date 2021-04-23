import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualize-array',
  templateUrl: './visualize-array.component.html',
  styleUrls: ['./visualize-array.component.scss']
})
export class VisualizeArrayComponent implements OnInit {

  constructor() { }
  array: Array<string>;
  @Input() set arrayInput(value: string) {
    this.array = value.split(',');
  };
  ngOnInit(): void {    
  }

}
