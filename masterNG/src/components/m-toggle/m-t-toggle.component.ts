import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-toggle',
  templateUrl: './m-t-toggle.component.html',
  styleUrls: ['./m-t-toggle.component.scss']
})
export class MTToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alert(event: any) {
    console.log(event);
  }
}
