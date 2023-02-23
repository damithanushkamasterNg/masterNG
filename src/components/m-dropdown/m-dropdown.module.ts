import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDropdownRoutingModule } from './m-dropdown-routing.module';
import { MDropdownComponent } from './m-dropdown.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MDropdownComponent
  ],
  imports: [
    CommonModule,
    MDropdownRoutingModule,
    ComponentStructureModule,
    SharedModule
  ]
})
export class MDropdownModule { }
