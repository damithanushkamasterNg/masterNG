import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDashboardComponent } from './m-dashboard.component';

const routes: Routes = [{ path: '', component: MDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MDashboardRoutingModule { }
