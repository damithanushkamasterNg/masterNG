import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-scss-map',
  templateUrl: './scss-map.component.html',
  styleUrls: ['./scss-map.component.scss']
})
export class ScssMapComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
