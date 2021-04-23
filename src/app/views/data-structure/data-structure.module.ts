import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataStructureRoutingModule } from './data-structure-routing.module';
import { ArrayComponent } from './array/array.component';
import { VisualizeArrayComponent } from '../components/visualize-array/visualize-array.component';


@NgModule({
  declarations: [ArrayComponent,VisualizeArrayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataStructureRoutingModule
  ]
})
export class DataStructureModule { }
