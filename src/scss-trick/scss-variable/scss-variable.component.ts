import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-scss-variable',
  templateUrl: './scss-variable.component.html',
  styleUrls: ['./scss-variable.component.scss']
})
export class ScssVariableComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
