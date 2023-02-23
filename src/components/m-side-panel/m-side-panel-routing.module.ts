import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MSidePanelComponent } from './m-side-panel.component';

const routes: Routes = [{ path: '', component: MSidePanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MSidePanelRoutingModule { }
