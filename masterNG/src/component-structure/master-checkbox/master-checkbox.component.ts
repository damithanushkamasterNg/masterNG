import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'm-checkbox',
  templateUrl: './master-checkbox.component.html',
  styleUrls: ['./master-checkbox.component.scss']
})
export class MasterCheckboxComponent implements OnInit {
  @Input() checkBoxLabel: any;
  @Output() onChangeCheck: EventEmitter<any> = new EventEmitter();
  checked = false;

  /**
   * this method can be used to change the checkbox
   * @param checked to checked status
   */
  onModelChange(checked: boolean) {
    this.checked = checked;
    this.onChangeCheck.emit(this.checked);
    return this.checked;
  }

  ngOnInit(): void {
  }
}
