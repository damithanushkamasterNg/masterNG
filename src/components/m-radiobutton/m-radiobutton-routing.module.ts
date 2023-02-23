import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MRadiobuttonComponent } from './m-radiobutton.component';

const routes: Routes = [{ path: '', component: MRadiobuttonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MRadiobuttonRoutingModule { }
