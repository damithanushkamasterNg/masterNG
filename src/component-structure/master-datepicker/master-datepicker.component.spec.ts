import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDatepickerComponent } from './master-datepicker.component';

describe('MasterDatepickerComponent', () => {
  let component: MasterDatepickerComponent;
  let fixture: ComponentFixture<MasterDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
