import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDropdownComponent } from './m-dropdown.component';

describe('MDropdownComponent', () => {
  let component: MDropdownComponent;
  let fixture: ComponentFixture<MDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
