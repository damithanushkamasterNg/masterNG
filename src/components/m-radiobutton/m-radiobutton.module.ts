import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MRadiobuttonRoutingModule } from './m-radiobutton-routing.module';
import { MRadiobuttonComponent } from './m-radiobutton.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MRadiobuttonComponent
  ],
  imports: [
    CommonModule,
    MRadiobuttonRoutingModule,
    ComponentStructureModule,
    SharedModule
  ]
})
export class MRadiobuttonModule { }
