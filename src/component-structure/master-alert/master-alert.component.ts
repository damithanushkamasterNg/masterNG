import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'm-alert',
  templateUrl: './master-alert.component.html',
  styleUrls: ['./master-alert.component.scss']
})
export class MasterAlertComponent implements OnInit {
  @Input() class: any;
  @Input() text: any;
  constructor() { }

  ngOnInit(): void {
  }

}
