import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAnimationRoutingModule } from './m-animation-routing.module';
import { MAnimationComponent } from './m-animation.component';


@NgModule({
  declarations: [
    MAnimationComponent
  ],
  imports: [
    CommonModule,
    MAnimationRoutingModule
  ]
})
export class MAnimationModule { }
