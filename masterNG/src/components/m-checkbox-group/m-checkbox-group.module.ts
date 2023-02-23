import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MCheckboxGroupRoutingModule } from './m-checkbox-group-routing.module';
import { MCheckboxGroupComponent } from './m-checkbox-group.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MCheckboxGroupComponent
  ],
  imports: [
    CommonModule,
    MCheckboxGroupRoutingModule,
    ComponentStructureModule,
    SharedModule
  ]
})
export class MCheckboxGroupModule { }
