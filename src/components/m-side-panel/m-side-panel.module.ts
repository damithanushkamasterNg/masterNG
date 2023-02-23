import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MSidePanelRoutingModule } from './m-side-panel-routing.module';
import { MSidePanelComponent } from './m-side-panel.component';


@NgModule({
  declarations: [
    MSidePanelComponent
  ],
  imports: [
    CommonModule,
    MSidePanelRoutingModule
  ]
})
export class MSidePanelModule { }
