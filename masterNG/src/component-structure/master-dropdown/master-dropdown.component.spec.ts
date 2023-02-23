import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDropdownComponent } from './master-dropdown.component';

describe('MasterDropdownComponent', () => {
  let component: MasterDropdownComponent;
  let fixture: ComponentFixture<MasterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
