import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-m-ng-template',
  templateUrl: './m-ng-template.component.html',
  styleUrls: ['./m-ng-template.component.scss']
})
export class MNgTemplateComponent implements OnInit, AfterViewInit {
  @ViewChild('ref') ref: any;

  constructor(public viewContainerRef:ViewContainerRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.ref);
  }

}
