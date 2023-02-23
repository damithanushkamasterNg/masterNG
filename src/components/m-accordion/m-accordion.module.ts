import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAccordionRoutingModule } from './m-accordion-routing.module';
import { MAccordionComponent } from './m-accordion.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MAccordionComponent
  ],
  imports: [
    CommonModule,
    MAccordionRoutingModule,
    ComponentStructureModule,
    SharedModule
  ]
})
export class MAccordionModule { }
