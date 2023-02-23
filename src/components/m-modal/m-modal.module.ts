import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MModalRoutingModule } from './m-modal-routing.module';
import { MModalComponent } from './m-modal.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MModalComponent
  ],
  imports: [
    CommonModule,
    MModalRoutingModule,
    ComponentStructureModule,
    SharedModule
  ]
})
export class MModalModule { }
