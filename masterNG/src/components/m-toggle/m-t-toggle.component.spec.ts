import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTToggleComponent } from './m-t-toggle.component';

describe('MToggleComponent', () => {
  let component: MTToggleComponent;
  let fixture: ComponentFixture<MTToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
