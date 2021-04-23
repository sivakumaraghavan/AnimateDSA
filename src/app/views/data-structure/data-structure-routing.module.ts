import { ArrayComponent } from './array/array.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'array',
    component: ArrayComponent,
    data: {
      title: 'Visualize Arrays'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataStructureRoutingModule { }
