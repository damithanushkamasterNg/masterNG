import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScssComponentComponent} from './scss-component.component';
import {MBoxComponent} from "./m-box/m-box.component";
import {MAnimationComponent} from "./m-animation/m-animation.component";
import {MBoxShadowComponent} from "./m-box-shadow/m-box-shadow.component";
import {MTextShadowComponent} from "./m-text-shadow/m-text-shadow.component";
import {MBorderComponent} from "./m-border/m-border.component";

const routes: Routes = [{path: '', component: ScssComponentComponent},
  {path: 'm-box', component: MBoxComponent},
  {path: 'm-box-shadow', component: MBoxShadowComponent},
  {path: 'm-animation', component: MAnimationComponent},
  {path: 'm-border', component: MBorderComponent},
  {path: 'm-text-shadow', component: MTextShadowComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScssComponentRoutingModule {
}
