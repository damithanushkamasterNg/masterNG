import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MButtonComponent } from './m-button.component';

describe('MButtonComponent', () => {
  let component: MButtonComponent;
  let fixture: ComponentFixture<MButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
