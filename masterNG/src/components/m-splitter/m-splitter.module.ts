import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MSplitterRoutingModule } from './m-splitter-routing.module';
import { MSplitterComponent } from './m-splitter.component';


@NgModule({
  declarations: [
    MSplitterComponent
  ],
  imports: [
    CommonModule,
    MSplitterRoutingModule
  ]
})
export class MSplitterModule { }
