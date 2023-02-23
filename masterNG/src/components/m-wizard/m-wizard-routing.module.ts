import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MWizardComponent } from './m-wizard.component';

const routes: Routes = [{ path: '', component: MWizardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MWizardRoutingModule { }
