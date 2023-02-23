import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterInputComponent } from './master-input.component';

describe('MasterInputComponent', () => {
  let component: MasterInputComponent;
  let fixture: ComponentFixture<MasterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
