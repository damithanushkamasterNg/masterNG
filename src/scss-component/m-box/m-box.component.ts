import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-m-box',
  templateUrl: './m-box.component.html',
  styleUrls: ['./m-box.component.scss']
})
export class MBoxComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
