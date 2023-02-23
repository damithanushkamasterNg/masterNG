import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBorderComponent } from './m-border.component';

describe('MBorderComponent', () => {
  let component: MBorderComponent;
  let fixture: ComponentFixture<MBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
