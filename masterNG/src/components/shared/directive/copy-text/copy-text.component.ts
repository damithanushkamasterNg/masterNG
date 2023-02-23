import {Directive, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appCopyText]',

})

export class CopyTextComponent implements OnInit {
  @Input() id: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('click') onClick() {
    this.copyToClipboard();
  }

  copyToClipboard() {
    const content = (document.getElementById(this.id) as HTMLElement).innerText;
    navigator['clipboard'].writeText(content).then().catch(e => console.error(e));
    const sb = document.getElementById("copy-success-overlay");

    //this is where the class name will be added & removed to activate the css
    // @ts-ignore
    sb.className = "show";

    setTimeout(() => { // @ts-ignore
      sb.className = sb.className.replace("show", "");
    }, 1000);
  }

}
