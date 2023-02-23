import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAlertComponent } from './master-alert.component';

describe('MasterAlertComponent', () => {
  let component: MasterAlertComponent;
  let fixture: ComponentFixture<MasterAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
