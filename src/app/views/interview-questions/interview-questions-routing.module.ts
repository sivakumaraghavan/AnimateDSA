import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Interview Questions'
    },
    children: [
      {
        path: 'front-end',
        loadChildren: () => import('../../views/interview-questions/front-end/front-end.module').then(m => m.FrontEndModule)
      },
      {
        path: 'back-end',
        loadChildren: () => import('../../views/interview-questions/back-end/back-end.module').then(m => m.BackEndModule)
      },
      {
        path: 'middleware',
        loadChildren: () => import('../../views/interview-questions/middleware/middleware.module').then(m => m.MiddlewareModule)
      },
      {
        path: 'databases',
        loadChildren: () => import('../../views/interview-questions/databases/databases.module').then(m => m.DatabasesModule)
      },
      {
        path: 'cloud-services',
        loadChildren: () => import('../../views/interview-questions/cloud-services/cloud-services.module').then(m => m.CloudServicesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewQuestionsRoutingModule { }
