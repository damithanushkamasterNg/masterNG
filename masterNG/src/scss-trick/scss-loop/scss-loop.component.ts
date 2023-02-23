import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-scss-loop',
  templateUrl: './scss-loop.component.html',
  styleUrls: ['./scss-loop.component.scss']
})
export class ScssLoopComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
