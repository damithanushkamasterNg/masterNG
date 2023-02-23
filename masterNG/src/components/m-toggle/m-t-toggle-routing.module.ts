import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MTToggleComponent } from './m-t-toggle.component';

const routes: Routes = [{ path: '', component: MTToggleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MTToggleRoutingModule { }
