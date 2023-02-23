import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootDirectiveComponent } from './root-directive.component';

const routes: Routes = [{ path: '', component: RootDirectiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootDirectiveRoutingModule { }
