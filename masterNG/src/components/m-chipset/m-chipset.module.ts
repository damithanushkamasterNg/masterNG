import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MChipsetRoutingModule } from './m-chipset-routing.module';
import { MChipsetComponent } from './m-chipset.component';


@NgModule({
  declarations: [
    MChipsetComponent
  ],
  imports: [
    CommonModule,
    MChipsetRoutingModule
  ]
})
export class MChipsetModule { }
