import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MTToggleRoutingModule } from './m-t-toggle-routing.module';
import { MTToggleComponent } from './m-t-toggle.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MTToggleComponent
  ],
  imports: [
    CommonModule,
    MTToggleRoutingModule,
    ComponentStructureModule,
    SharedModule
  ]
})
export class MTToggleModule { }
