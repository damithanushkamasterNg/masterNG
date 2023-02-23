import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MSplitterComponent } from './m-splitter.component';

const routes: Routes = [{ path: '', component: MSplitterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MSplitterRoutingModule { }
