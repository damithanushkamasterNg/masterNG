import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MInputComponent } from './m-input.component';

const routes: Routes = [{ path: '', component: MInputComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MInputRoutingModule { }
