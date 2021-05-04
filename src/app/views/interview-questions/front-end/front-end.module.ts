import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndRoutingModule } from './front-end-routing.module';
import { HtmlComponent } from './html/html.component';


@NgModule({
  declarations: [HtmlComponent],
  imports: [
    CommonModule,
    FrontEndRoutingModule
  ]
})
export class FrontEndModule { }
