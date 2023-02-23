import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'm-input',
  templateUrl: './master-input.component.html',
  styleUrls: ['./master-input.component.scss']
})
export class MasterInputComponent implements OnInit {
  @Input() inputType: any;
  @Input() maxLength: any;
  @Input() minLength: any;
  @Output() onKeyUp: EventEmitter<any> = new EventEmitter();
  @Output() onKeyDown: EventEmitter<any> = new EventEmitter();
  @Input() textFieldPlaceholder: any;
  constructor() { }

  ngOnInit(): void {
  }

}
