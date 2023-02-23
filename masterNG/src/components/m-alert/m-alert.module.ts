import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAlertRoutingModule } from './m-alert-routing.module';
import { MAlertComponent } from './m-alert.component';
import {SharedModule} from "../shared/shared.module";
import {ComponentStructureModule} from "../../component-structure/component-structure.module";


@NgModule({
  declarations: [
    MAlertComponent
  ],
  imports: [
    CommonModule,
    MAlertRoutingModule,
    SharedModule,
    ComponentStructureModule
  ]
})
export class MAlertModule { }
