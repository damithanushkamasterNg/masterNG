import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAccordionComponent } from './master-accordion.component';

describe('MasterAccordionComponent', () => {
  let component: MasterAccordionComponent;
  let fixture: ComponentFixture<MasterAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
