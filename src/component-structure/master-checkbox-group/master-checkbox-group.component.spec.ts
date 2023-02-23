import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCheckboxGroupComponent } from './master-checkbox-group.component';

describe('MasterCheckboxGroupComponent', () => {
  let component: MasterCheckboxGroupComponent;
  let fixture: ComponentFixture<MasterCheckboxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterCheckboxGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
