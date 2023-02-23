import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAccordionComponent } from './m-accordion.component';

describe('MAccordionComponent', () => {
  let component: MAccordionComponent;
  let fixture: ComponentFixture<MAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
