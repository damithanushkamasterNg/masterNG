import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyboardEventRoutingModule } from './keyboard-event-routing.module';
import { KeyboardEventComponent } from './keyboard-event.component';
import { AddEventListnerComponent } from './add-event-listner/add-event-listner.component';
import { HostListnerComponent } from './host-listner/host-listner.component';
import { KeyboardEventDirectiveComponent } from './keyboard-event-directive/keyboard-event-directive.component';


@NgModule({
  declarations: [
    KeyboardEventComponent,
    AddEventListnerComponent,
    HostListnerComponent,
    KeyboardEventDirectiveComponent
  ],
  imports: [
    CommonModule,
    KeyboardEventRoutingModule
  ]
})
export class KeyboardEventModule { }
