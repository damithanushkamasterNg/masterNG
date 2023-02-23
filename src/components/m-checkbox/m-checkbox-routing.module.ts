import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MCheckboxComponent } from './m-checkbox.component';

const routes: Routes = [{ path: '', component: MCheckboxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MCheckboxRoutingModule { }
