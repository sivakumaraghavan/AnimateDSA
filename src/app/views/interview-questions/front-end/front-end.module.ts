import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndRoutingModule } from './front-end-routing.module';
import { HtmlComponent } from './html/html.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [HtmlComponent, DashboardComponent],
  imports: [
    CommonModule,
    FrontEndRoutingModule
  ]
})
export class FrontEndModule { }
