import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MAnimationComponent } from './m-animation.component';

const routes: Routes = [{ path: '', component: MAnimationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MAnimationRoutingModule { }
