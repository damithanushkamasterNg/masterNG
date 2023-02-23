import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MLoaderComponent } from './m-loader.component';

const routes: Routes = [{ path: '', component: MLoaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MLoaderRoutingModule { }
