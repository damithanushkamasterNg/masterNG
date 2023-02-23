import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDatepickerComponent } from './m-datepicker.component';

const routes: Routes = [{ path: '', component: MDatepickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MDatepickerRoutingModule { }
