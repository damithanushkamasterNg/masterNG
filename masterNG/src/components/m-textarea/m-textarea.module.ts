import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MTextareaRoutingModule } from './m-textarea-routing.module';
import { MTextareaComponent } from './m-textarea.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MTextareaComponent
  ],
  imports: [
    CommonModule,
    MTextareaRoutingModule,
    ComponentStructureModule,
    SharedModule
  ]
})
export class MTextareaModule { }
