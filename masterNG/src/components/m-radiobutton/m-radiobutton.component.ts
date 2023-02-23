import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-radiobutton',
  templateUrl: './m-radiobutton.component.html',
  styleUrls: ['./m-radiobutton.component.scss']
})
export class MRadiobuttonComponent implements OnInit {
  options: any = [{value: 'A'},{value: 'B'},{value: 'C'}];

  constructor() { }

  ngOnInit(): void {
  }

}

