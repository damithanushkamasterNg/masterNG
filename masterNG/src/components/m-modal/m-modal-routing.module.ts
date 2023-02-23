import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MModalComponent } from './m-modal.component';

const routes: Routes = [{ path: '', component: MModalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MModalRoutingModule { }
