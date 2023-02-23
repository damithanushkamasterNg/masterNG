import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScssComponentRoutingModule } from './scss-component-routing.module';
import { ScssComponentComponent } from './scss-component.component';
import { MBoxComponent } from './m-box/m-box.component';
import { MAnimationComponent } from './m-animation/m-animation.component';
import { MBorderComponent } from './m-border/m-border.component';
import { MFlexComponent } from './m-flex/m-flex.component';
import { MGridComponent } from './m-grid/m-grid.component';
import {ComponentStructureModule} from "../component-structure/component-structure.module";
import { MBoxShadowComponent } from './m-box-shadow/m-box-shadow.component';
import { MTextShadowComponent } from './m-text-shadow/m-text-shadow.component';


@NgModule({
  declarations: [
    ScssComponentComponent,
    MBoxComponent,
    MAnimationComponent,
    MBorderComponent,
    MFlexComponent,
    MGridComponent,
    MBoxShadowComponent,
    MTextShadowComponent
  ],
    imports: [
        CommonModule,
        ScssComponentRoutingModule,
        ComponentStructureModule
    ]
})
export class ScssComponentModule { }
