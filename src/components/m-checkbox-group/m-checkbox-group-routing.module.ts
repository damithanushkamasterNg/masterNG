import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MCheckboxGroupComponent } from './m-checkbox-group.component';

const routes: Routes = [{ path: '', component: MCheckboxGroupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MCheckboxGroupRoutingModule { }
