import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MTableRoutingModule } from './m-table-routing.module';
import { MTableComponent } from './m-table.component';


@NgModule({
  declarations: [
    MTableComponent
  ],
  imports: [
    CommonModule,
    MTableRoutingModule
  ]
})
export class MTableModule { }
