import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-m-box-shadow',
  templateUrl: './m-box-shadow.component.html',
  styleUrls: ['./m-box-shadow.component.scss']
})
export class MBoxShadowComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
