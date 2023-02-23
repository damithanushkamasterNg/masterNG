import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTemplateHeader]'
})
export class TemplateHeaderDirective {

  _text: string | undefined;

  constructor(public _viewContainer: ViewContainerRef,
              public templateRef: TemplateRef<any>) {
  }


  @Input()
  set text(condition: string) {
    this.text = condition
    this.updateView();
  }

  updateView() {
    if (this._text) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this._viewContainer.clear();
    }
  }

}
