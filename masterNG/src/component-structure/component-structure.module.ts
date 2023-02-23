import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterButtonComponent } from './master-button/master-button.component';
import { MasterCheckboxComponent } from './master-checkbox/master-checkbox.component';
import {FormsModule} from "@angular/forms";
import { MasterDropdownComponent } from './master-dropdown/master-dropdown.component';
import { MasterDatepickerComponent } from './master-datepicker/master-datepicker.component';
import { MasterCheckboxGroupComponent } from './master-checkbox-group/master-checkbox-group.component';
import { MasterInputComponent } from './master-input/master-input.component';
import { MasterModalComponent } from './master-modal/master-modal.component';
import { MasterTextareaComponent } from './master-textarea/master-textarea.component';
import { MasterRadiobuttonComponent } from './master-radiobutton/master-radiobutton.component';
import { MasterAlertComponent } from './master-alert/master-alert.component';
import { MDirectiveComponent } from './m-directive/m-directive.component';
import { MNgTemplateComponent } from './m-ng-template/m-ng-template.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { MasterLoaderComponent } from './master-loader/master-loader.component';
import {ComponentStructureComponent} from "./component-structure.component";
import { MasterToggleButtonComponent } from './master-toggle-button/master-toggle-button.component';
import { MasterAccordionComponent } from './master-accordion/master-accordion.component';



@NgModule({
    declarations: [
        MasterButtonComponent,
        MasterCheckboxComponent,
        MasterDropdownComponent,
        MasterDatepickerComponent,
        MasterCheckboxGroupComponent,
        MasterInputComponent,
        MasterModalComponent,
        MasterTextareaComponent,
        MasterRadiobuttonComponent,
        MasterAlertComponent,
        MDirectiveComponent,
        MNgTemplateComponent,
        MasterLoaderComponent,
        ComponentStructureComponent,
        MasterToggleButtonComponent,
        MasterAccordionComponent,
    ],
  exports: [
    MasterButtonComponent,
    MasterCheckboxComponent,
    MasterDropdownComponent,
    MasterDatepickerComponent,
    MasterCheckboxGroupComponent,
    MasterInputComponent,
    MasterModalComponent,
    MasterTextareaComponent,
    MasterRadiobuttonComponent,
    MasterAlertComponent,
    MasterLoaderComponent,
    MasterToggleButtonComponent,
    MasterAccordionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class ComponentStructureModule { }
