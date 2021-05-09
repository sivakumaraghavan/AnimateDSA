import { HtmlComponent } from './html/html.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Front End'
    },
    children: [
      {
        path: 'html',
        component: HtmlComponent,
        data: {
          title: 'HTML'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndRoutingModule { }
