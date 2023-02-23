import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MChipsetComponent } from './m-chipset.component';

const routes: Routes = [{ path: '', component: MChipsetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MChipsetRoutingModule { }
