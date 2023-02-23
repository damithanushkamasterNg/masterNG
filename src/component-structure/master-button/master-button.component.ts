import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'm-button',
  templateUrl: './master-button.component.html',
  styleUrls: ['./master-button.component.scss'],
})
export class MasterButtonComponent implements OnInit {
  @Input() buttonLabel: any;
  @Input() class: any;
  @Input() activeAnimated = false;
  @Input() colorAnimation = false;
  @Output() btnClick = new EventEmitter();
  @Output() btnHover = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
