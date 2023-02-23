import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDropdownComponent } from './m-dropdown.component';

const routes: Routes = [{ path: '', component: MDropdownComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MDropdownRoutingModule { }
