import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessComponentRoutingModule } from './less-component-routing.module';
import { LessComponentComponent } from './less-component.component';


@NgModule({
  declarations: [
    LessComponentComponent
  ],
  imports: [
    CommonModule,
    LessComponentRoutingModule
  ]
})
export class LessComponentModule { }
