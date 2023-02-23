import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-m-text-shadow',
  templateUrl: './m-text-shadow.component.html',
  styleUrls: ['./m-text-shadow.component.scss']
})
export class MTextShadowComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
