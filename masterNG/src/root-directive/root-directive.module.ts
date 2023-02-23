import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootDirectiveRoutingModule } from './root-directive-routing.module';
import { RootDirectiveComponent } from './root-directive.component';
import { TemplateHeaderDirective } from './directive/template-header.directive';


@NgModule({
  declarations: [
    RootDirectiveComponent,
    TemplateHeaderDirective
  ],
  imports: [
    CommonModule,
    RootDirectiveRoutingModule
  ],
  exports: [TemplateHeaderDirective]
})
export class RootDirectiveModule { }
