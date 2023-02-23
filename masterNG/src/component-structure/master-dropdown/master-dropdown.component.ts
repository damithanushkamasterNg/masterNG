import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'm-dropdown',
  templateUrl: './master-dropdown.component.html',
  styleUrls: ['./master-dropdown.component.scss']
})
export class MasterDropdownComponent implements OnInit {
  @Input() placeHolder: any;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() options: any [] = [];
  @Input() bindValue: any;
  @Input() bindLabel: any;
  selectedValue: any;

  /**
   * this method can be used to emit change value
   * @param event to change event
   */
  onOptionsSelected(event:any) {
    let obj = this.options.find(item => item.name === event.target.value);
    this.selectedValue = this.bindValue === 'id' ? obj.id : this.bindValue === 'name' ? obj.name : obj.id;
    this.onChange.emit(this.selectedValue);
  }

  ngOnInit(): void {
  }
}
