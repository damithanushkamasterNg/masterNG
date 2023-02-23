import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MLoaderRoutingModule } from './m-loader-routing.module';
import { MLoaderComponent } from './m-loader.component';
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MLoaderComponent
  ],
  imports: [
    CommonModule,
    MLoaderRoutingModule,
    ComponentStructureModule,
    SharedModule
  ]
})
export class MLoaderModule { }
