import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-scss-function',
  templateUrl: './scss-function.component.html',
  styleUrls: ['./scss-function.component.scss']
})
export class ScssFunctionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
