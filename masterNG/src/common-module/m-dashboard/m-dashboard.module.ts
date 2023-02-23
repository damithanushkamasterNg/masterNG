import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDashboardRoutingModule } from './m-dashboard-routing.module';
import { MDashboardComponent } from './m-dashboard.component';
import {MButtonModule} from "../../components/m-button/m-button.module";


@NgModule({
    declarations: [
        MDashboardComponent
    ],
    exports: [
        MDashboardComponent
    ],
    imports: [
        CommonModule,
        MDashboardRoutingModule,
        MButtonModule
    ]
})
export class MDashboardModule { }
