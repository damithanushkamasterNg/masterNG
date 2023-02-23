import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MTextareaComponent } from './m-textarea.component';

const routes: Routes = [{ path: '', component: MTextareaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MTextareaRoutingModule { }
