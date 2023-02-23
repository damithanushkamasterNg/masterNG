import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDatepickerRoutingModule } from './m-datepicker-routing.module';
import { MDatepickerComponent } from './m-datepicker.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MDatepickerComponent
  ],
    imports: [
        CommonModule,
        MDatepickerRoutingModule,
        ComponentStructureModule,
        SharedModule
    ]
})
export class MDatepickerModule { }
