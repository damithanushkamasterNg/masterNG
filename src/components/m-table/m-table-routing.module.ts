import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MTableComponent } from './m-table.component';

const routes: Routes = [{ path: '', component: MTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MTableRoutingModule { }
