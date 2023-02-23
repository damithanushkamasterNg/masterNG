import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCheckboxComponent } from './master-checkbox.component';

describe('MasterCheckboxComponent', () => {
  let component: MasterCheckboxComponent;
  let fixture: ComponentFixture<MasterCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
