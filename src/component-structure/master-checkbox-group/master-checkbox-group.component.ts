import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'm-checkbox-group',
  templateUrl: './master-checkbox-group.component.html',
  styleUrls: ['./master-checkbox-group.component.scss']
})
export class MasterCheckboxGroupComponent implements OnInit {
  @Output() onParentSelect: EventEmitter<any> = new EventEmitter();
  @Output() onChildSelect: EventEmitter<any> = new EventEmitter();
  @Input() groupName: any;
  @Input() childrens: any [] = [{label: 'a', value: false}, {label: 'b', value: false}, {label: 'c', value: false}];
  @Input() isChecked: any;

  constructor() {
  }

  /**
   * this method used to behave parent checkbox changes
   * @param event to change event
   */
  onParentCheckChange(event: boolean) {
    this.onParentSelect.emit(event);
    if (this.isChecked) {
      this.childrens.forEach(children => {
        children.value = true;
      });
    } else {
      this.childrens.forEach(children => {
        children.value = false;
      })
    }
  }

  /**
   * this method used to behave child checkbox changes
   * @param child to change child checkbox property
   * @param event to change event
   */
  onChildrenCheckChange(child: any, event: boolean) {
    child.value = event;
    this.onChildSelect.emit(child.value);
    this.isChecked = this.childrens.every(x => x.value === true);
  }

  /**
   * this method used to mark parent as partially
   */
  partialSelect() {
    if (!this.isChecked) {
      return this.childrens.some(x => x.value === true);
    } else {
      return false;
    }
  }

  ngOnInit(): void {
  }
}
