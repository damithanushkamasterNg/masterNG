import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MScrollbarComponent } from './m-scrollbar.component';

const routes: Routes = [{ path: '', component: MScrollbarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MScrollbarRoutingModule { }
