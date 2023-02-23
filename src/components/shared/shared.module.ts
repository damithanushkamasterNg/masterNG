import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyTextComponent } from './directive/copy-text/copy-text.component';
import {NumberOnlyDirective} from "./directive/number-only/number-only-directive";
import { GridSystemComponent } from './css/grid-system/grid-system.component';

@NgModule({
  declarations: [
    CopyTextComponent,
    NumberOnlyDirective,
    GridSystemComponent,
  ],
  exports: [
    CopyTextComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
