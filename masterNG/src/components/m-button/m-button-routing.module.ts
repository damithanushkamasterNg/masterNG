import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MButtonComponent } from './m-button.component';

const routes: Routes = [{ path: '', component: MButtonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MButtonRoutingModule { }
