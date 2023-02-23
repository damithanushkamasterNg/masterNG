import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScssTrickRoutingModule } from './scss-trick-routing.module';
import { ScssTrickComponent } from './scss-trick.component';
import { ScssFunctionComponent } from './scss-function/scss-function.component';
import { ScssVariableComponent } from './scss-variable/scss-variable.component';
import { ScssLoopComponent } from './scss-loop/scss-loop.component';
import { ScssConditionComponent } from './scss-condition/scss-condition.component';
import {ComponentStructureModule} from "../component-structure/component-structure.module";
import { ScssMapComponent } from './scss-map/scss-map.component';


@NgModule({
  declarations: [
    ScssTrickComponent,
    ScssFunctionComponent,
    ScssVariableComponent,
    ScssLoopComponent,
    ScssConditionComponent,
    ScssMapComponent
  ],
  imports: [
    CommonModule,
    ScssTrickRoutingModule,
    ComponentStructureModule
  ]
})
export class ScssTrickModule { }
