import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MAlertComponent } from './m-alert.component';

const routes: Routes = [{ path: '', component: MAlertComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MAlertRoutingModule { }
