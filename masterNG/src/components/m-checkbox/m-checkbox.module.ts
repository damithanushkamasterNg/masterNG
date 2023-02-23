import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MCheckboxRoutingModule } from './m-checkbox-routing.module';
import { MCheckboxComponent } from './m-checkbox.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MCheckboxComponent
  ],
  imports: [
    CommonModule,
    MCheckboxRoutingModule,
    ComponentStructureModule,
    FormsModule,
    SharedModule
  ]
})
export class MCheckboxModule { }
