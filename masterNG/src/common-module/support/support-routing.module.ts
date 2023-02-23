import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SupportComponent} from './support.component';
import {MDirectiveComponent} from "../../component-structure/m-directive/m-directive.component";
import {MNgTemplateComponent} from "../../component-structure/m-ng-template/m-ng-template.component";
import {GridSystemComponent} from "../../components/shared/css/grid-system/grid-system.component";

const routes: Routes = [{path: '', component: SupportComponent},
  {path: 'directive', component: MDirectiveComponent},
  {path: 'template', component: MNgTemplateComponent},
  {path: 'css-tricks', component: GridSystemComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule {
}
