import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'm-toggle-button',
  templateUrl: './master-toggle-button.component.html',
  styleUrls: ['./master-toggle-button.component.scss']
})
export class MasterToggleButtonComponent implements OnInit {
  @Output() onChangeToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
