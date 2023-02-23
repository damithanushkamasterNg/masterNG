import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MAccordionComponent } from './m-accordion.component';

const routes: Routes = [{ path: '', component: MAccordionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MAccordionRoutingModule { }
