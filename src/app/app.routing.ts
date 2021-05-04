import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'data-structure/array',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'algorithm',
        loadChildren: () => import('./views/algorithm/algorithm.module').then(m => m.AlgorithmModule)
      },
      {
        path: 'data-structure',
        loadChildren: () => import('./views/data-structure/data-structure.module').then(m => m.DataStructureModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'interview-questions',
        loadChildren: () => import('./views/interview-questions/interview-questions.module').then(m => m.InterviewQuestionsModule)
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
