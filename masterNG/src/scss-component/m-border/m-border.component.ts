import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-m-border',
  templateUrl: './m-border.component.html',
  styleUrls: ['./m-border.component.scss']
})
export class MBorderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
