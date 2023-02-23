import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyboardEventComponent } from './keyboard-event.component';
import {AddEventListnerComponent} from "./add-event-listner/add-event-listner.component";
import {HostListnerComponent} from "./host-listner/host-listner.component";
import {KeyboardEventDirectiveComponent} from "./keyboard-event-directive/keyboard-event-directive.component";

const routes: Routes = [{ path: '', component: KeyboardEventComponent },
  { path: 'add-event-listener', component: AddEventListnerComponent },
  { path: 'host-listener', component: HostListnerComponent },
  { path: 'key-bord-directive', component: KeyboardEventDirectiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyboardEventRoutingModule { }
