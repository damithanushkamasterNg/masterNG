import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MWizardRoutingModule } from './m-wizard-routing.module';
import { MWizardComponent } from './m-wizard.component';


@NgModule({
  declarations: [
    MWizardComponent
  ],
  imports: [
    CommonModule,
    MWizardRoutingModule
  ]
})
export class MWizardModule { }
