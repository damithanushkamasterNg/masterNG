import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MButtonRoutingModule } from './m-button-routing.module';
import {MButtonComponent} from "./m-button.component";
import {ComponentStructureModule} from "../../component-structure/component-structure.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
      MButtonComponent
    ],
    imports: [
        CommonModule,
        MButtonRoutingModule,
        ComponentStructureModule,
        SharedModule,
    ]
})
export class MButtonModule { }
