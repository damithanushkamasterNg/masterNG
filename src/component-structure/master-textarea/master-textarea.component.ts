import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'm-textarea',
  templateUrl: './master-textarea.component.html',
  styleUrls: ['./master-textarea.component.scss']
})
export class MasterTextareaComponent implements OnInit {
  @Input() inputType: any;
  @Input() maxLength: any;
  @Input() textFieldPlaceholder: any;
  constructor() { }

  ngOnInit(): void {
  }

}
