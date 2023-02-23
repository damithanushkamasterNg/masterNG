import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'button',
  loadChildren: () => import('../components/m-button/m-button.module').then(m => m.MButtonModule)
},
  {
    path: 'checkbox',
    loadChildren: () => import('../components/m-checkbox/m-checkbox.module').then(m => m.MCheckboxModule)
  },
  {path: 'table', loadChildren: () => import('../components/m-table/m-table.module').then(m => m.MTableModule)},
  {path: 'chip', loadChildren: () => import('../components/m-chipset/m-chipset.module').then(m => m.MChipsetModule)},
  {path: 'input', loadChildren: () => import('../components/m-input/m-input.module').then(m => m.MInputModule)},
  {
    path: 'textarea',
    loadChildren: () => import('../components/m-textarea/m-textarea.module').then(m => m.MTextareaModule)
  },
  {
    path: 'datepicker',
    loadChildren: () => import('../components/m-datepicker/m-datepicker.module').then(m => m.MDatepickerModule)
  },
  {
    path: 'checkbox-group',
    loadChildren: () => import('../components/m-checkbox-group/m-checkbox-group.module').then(m => m.MCheckboxGroupModule)
  },
  {path: 'modal', loadChildren: () => import('../components/m-modal/m-modal.module').then(m => m.MModalModule)},
  {
    path: 'side-panel',
    loadChildren: () => import('../components/m-side-panel/m-side-panel.module').then(m => m.MSidePanelModule)
  },
  {
    path: 'dropdown',
    loadChildren: () => import('../components/m-dropdown/m-dropdown.module').then(m => m.MDropdownModule)
  },
  {path: '', loadChildren: () => import('../components/about/about.module').then(m => m.AboutModule)},
  {
    path: 'm-radiobutton',
    loadChildren: () => import('../components/m-radiobutton/m-radiobutton.module').then(m => m.MRadiobuttonModule)
  },
  {path: 'm-alert', loadChildren: () => import('../components/m-alert/m-alert.module').then(m => m.MAlertModule)},
  {
    path: 'm-accordion',
    loadChildren: () => import('../components/m-accordion/m-accordion.module').then(m => m.MAccordionModule)
  },
  {
    path: 'm-splitter',
    loadChildren: () => import('../components/m-splitter/m-splitter.module').then(m => m.MSplitterModule)
  },
  {path: 'm-wizard', loadChildren: () => import('../components/m-wizard/m-wizard.module').then(m => m.MWizardModule)},
  {path: 'm-loader', loadChildren: () => import('../components/m-loader/m-loader.module').then(m => m.MLoaderModule)},
  {
    path: 'm-animation',
    loadChildren: () => import('../components/m-animation/m-animation.module').then(m => m.MAnimationModule)
  },
  {
    path: 'm-scrollbar',
    loadChildren: () => import('../components/m-scrollbar/m-scrollbar.module').then(m => m.MScrollbarModule)
  },
  {
    path: 'm-toggle',
    loadChildren: () => import('../components/m-toggle/m-t-toggle.module').then(m => m.MTToggleModule)
  },
  {path: 'support', loadChildren: () => import('../common-module/support/support.module').then(m => m.SupportModule)},
  {
    path: 'scss-component',
    loadChildren: () => import('../scss-component/scss-component.module').then(m => m.ScssComponentModule)
  },
  { path: 'about', loadChildren: () => import('../components/about/about.module').then(m => m.AboutModule) },
  { path: 'scss-component', loadChildren: () => import('../scss-component/scss-component.module').then(m => m.ScssComponentModule) },
  { path: 'less-component', loadChildren: () => import('../less-component/less-component.module').then(m => m.LessComponentModule) },
  { path: 'scss-trick', loadChildren: () => import('../scss-trick/scss-trick.module').then(m => m.ScssTrickModule) },
  { path: 'root-directive', loadChildren: () => import('../root-directive/root-directive.module').then(m => m.RootDirectiveModule) },
  { path: 'keyboard-event', loadChildren: () => import('../keyboard-event/keyboard-event.module').then(m => m.KeyboardEventModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
