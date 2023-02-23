import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'm-datepicker',
  templateUrl: './master-datepicker.component.html',
  styleUrls: ['./master-datepicker.component.scss']
})
export class MasterDatepickerComponent implements OnInit {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Input() placeHolder: any;
  @Input() maxDate: any;
  @Input() minDate: any;
  @Input() datePattern: any;
  selectedDate: Date | undefined;

  ngOnInit(): void {
  }

}
