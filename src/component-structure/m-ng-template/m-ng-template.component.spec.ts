import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNgTemplateComponent } from './m-ng-template.component';

describe('MNgTemplateComponent', () => {
  let component: MNgTemplateComponent;
  let fixture: ComponentFixture<MNgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MNgTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
