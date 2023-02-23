import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCheckboxComponent } from './m-checkbox.component';

describe('MCheckboxComponent', () => {
  let component: MCheckboxComponent;
  let fixture: ComponentFixture<MCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
