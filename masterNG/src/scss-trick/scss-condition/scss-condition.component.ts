import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-scss-condition',
  templateUrl: './scss-condition.component.html',
  styleUrls: ['./scss-condition.component.scss']
})
export class ScssConditionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
