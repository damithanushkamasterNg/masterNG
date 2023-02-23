import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-m-animation',
  templateUrl: './m-animation.component.html',
  styleUrls: ['./m-animation.component.scss']
})
export class MAnimationComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
