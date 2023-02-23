import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-dropdown',
  templateUrl: './m-dropdown.component.html',
  styleUrls: ['./m-dropdown.component.scss']
})
export class MDropdownComponent implements OnInit {
  testOptions: any = [{id: 1, name: 'A'},{id: 1, name: 'B'},{id: 1, name: 'C'},{id: 1, name: 'D'}];

  constructor() { }

  ngOnInit(): void {
  }

}

