import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'm-accordion',
  templateUrl: './master-accordion.component.html',
  styleUrls: ['./master-accordion.component.scss']
})
export class MasterAccordionComponent implements OnInit {
  @Input() id: any;
  @Input() accordionSet: any;

  constructor() {

  }

  ngOnInit(): void {
  }

  /**
   * this method can be used to expand group
   * @param id to element id
   */
  clickOnPanel(id: any) {
    if(id === null){
      return;
    }
    let acc: any | null = document.getElementById(id);
    acc.classList.toggle("active");
    let panel = acc.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }
}
