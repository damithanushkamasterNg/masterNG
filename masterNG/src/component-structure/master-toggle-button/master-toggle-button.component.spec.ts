import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterToggleButtonComponent } from './master-toggle-button.component';

describe('MasterToggleButtonComponent', () => {
  let component: MasterToggleButtonComponent;
  let fixture: ComponentFixture<MasterToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterToggleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
