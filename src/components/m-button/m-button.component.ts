import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-m-button',
  templateUrl: './m-button.component.html',
  styleUrls: ['./m-button.component.scss']
})
export class MButtonComponent implements OnInit {
  public primary = true;
  public danger = false;
  public outline = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * change button according to pram string
   * @param x to pram string
   */
  loadContent(x: string) {
    switch (x) {
      case 'P':
        this.primary = true;
        this.danger = false;
        this.outline = false;
        break;
      case 'X':
        this.danger = true;
        this.primary = false;
        this.danger = false;
        break;
      case 'O':
        this.outline = true;
        this.primary = false;
        this.danger = false;
        break;
    }
  }
}
