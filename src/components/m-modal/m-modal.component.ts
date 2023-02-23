import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-modal',
  templateUrl: './m-modal.component.html',
  styleUrls: ['./m-modal.component.scss']
})
export class MModalComponent implements OnInit {
  view = false;

  constructor() { }

  ngOnInit(): void {
  }

}
