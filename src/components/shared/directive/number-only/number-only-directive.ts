import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[numberOnly]',

})

export class NumberOnlyDirective implements OnInit {
  ngOnInit(): void {
  }
  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initialValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    if ( initialValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
