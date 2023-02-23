import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScssTrickComponent } from './scss-trick.component';
import {ScssFunctionComponent} from "./scss-function/scss-function.component";
import {ScssConditionComponent} from "./scss-condition/scss-condition.component";
import {ScssLoopComponent} from "./scss-loop/scss-loop.component";
import {ScssVariableComponent} from "./scss-variable/scss-variable.component";
import {ScssMapComponent} from "./scss-map/scss-map.component";

const routes: Routes = [
  { path: '', component: ScssTrickComponent },
  { path: 'scss-function', component: ScssFunctionComponent },
  { path: 'scss-condition', component: ScssConditionComponent },
  { path: 'scss-loop', component: ScssLoopComponent },
  { path: 'scss-variable', component: ScssVariableComponent },
  { path: 'scss-map', component: ScssMapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScssTrickRoutingModule { }
