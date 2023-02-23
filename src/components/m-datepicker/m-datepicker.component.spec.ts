import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDatepickerComponent } from './m-datepicker.component';

describe('MDatepickerComponent', () => {
  let component: MDatepickerComponent;
  let fixture: ComponentFixture<MDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
