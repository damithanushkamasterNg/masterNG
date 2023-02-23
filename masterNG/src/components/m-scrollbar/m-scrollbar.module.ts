import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MScrollbarRoutingModule } from './m-scrollbar-routing.module';
import { MScrollbarComponent } from './m-scrollbar.component';


@NgModule({
  declarations: [
    MScrollbarComponent
  ],
  imports: [
    CommonModule,
    MScrollbarRoutingModule
  ]
})
export class MScrollbarModule { }
