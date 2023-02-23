import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'm-loader',
  templateUrl: './master-loader.component.html',
  styleUrls: ['./master-loader.component.scss']
})
export class MasterLoaderComponent implements OnInit {

  @Input() type: any;
  @Input() class: any;
  src: any;


  constructor() { }

  ngOnInit(): void {
    this.returnGif(this.type);
  }

  returnGif(type: any): void{
    if(!type){
      return;
    }
    switch (type) {
      case type = 'spin':
        this.src = 'assets/loading/spinner-1s-200px.gif'
        break;
      case type = 'ripple':
        this.src = 'assets/loading/ripple-1s-200px.gif'
        break;
      case type = 'infinity':
        this.src = 'assets/loading/Infinity-1s-200px.gif'
        break;
      case type = 'radio':
        this.src = 'assets/loading/radio-1s-200px.gif'
        break;
      default:
        console.log("No detect ype!");
        break;
    }
  }

}
