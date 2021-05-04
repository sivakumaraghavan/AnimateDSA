import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewQuestionsRoutingModule } from './interview-questions-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    InterviewQuestionsRoutingModule
  ]
})
export class InterviewQuestionsModule { }
