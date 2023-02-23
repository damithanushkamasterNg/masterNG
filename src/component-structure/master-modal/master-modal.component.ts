import {Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'm-modal',
  templateUrl: './master-modal.component.html',
  styleUrls: ['./master-modal.component.scss']
})
export class MasterModalComponent implements OnInit, OnDestroy {

  @Input() visible: any = false;
  @Input() isNeedToBackDrop = false;
  @Input() isClosedModalWhenClickOutSide = false;
  @Input() headerLabel: any;
  @Output() onClose: any = new EventEmitter();
  public element: any;

  constructor(public _el: ElementRef) {
    this.element = _el.nativeElement;
    this.element.style.display = 'block';
  }

  @HostListener('document:click', ['$event'])
  clickOnDocument() {
    if(this.isClosedModalWhenClickOutSide){
      this.closeModal();
    }
  }


  closeModal() {
    this.element.style.display = 'none';
    document.body.classList.remove('m-background-style');
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);
  }

  ngAfterViewInit(): void {
    if(this.isNeedToBackDrop){
      document.body.classList.add('m-background-style');
    } else {
      document.body.classList.remove('m-background-style');
    }
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.element);
  }
}
