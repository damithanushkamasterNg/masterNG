import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMouseAction]'
})
export class MouseActionDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('Red');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
