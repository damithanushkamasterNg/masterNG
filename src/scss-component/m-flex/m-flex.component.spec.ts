import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFlexComponent } from './m-flex.component';

describe('MFlexComponent', () => {
  let component: MFlexComponent;
  let fixture: ComponentFixture<MFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
