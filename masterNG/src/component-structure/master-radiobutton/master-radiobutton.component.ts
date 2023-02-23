import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'm-radiobutton',
  templateUrl: './master-radiobutton.component.html',
  styleUrls: ['./master-radiobutton.component.scss']
})
export class MasterRadiobuttonComponent implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() options: any [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
