import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MInputRoutingModule } from './m-input-routing.module';
import { MInputComponent } from './m-input.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MInputComponent
  ],
  imports: [
    CommonModule,
    MInputRoutingModule,
    ComponentStructureModule,
    SharedModule
  ]
})
export class MInputModule { }
