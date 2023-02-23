import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MInputComponent } from './m-input.component';

describe('MInputComponent', () => {
  let component: MInputComponent;
  let fixture: ComponentFixture<MInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
