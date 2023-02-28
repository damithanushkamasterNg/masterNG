import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHoverHostListener]'
})
export class HoverHostListenerDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}

