import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessComponentComponent } from './less-component.component';

const routes: Routes = [{ path: '', component: LessComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessComponentRoutingModule { }
