import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRadiobuttonComponent } from './m-radiobutton.component';

describe('MRadiobuttonComponent', () => {
  let component: MRadiobuttonComponent;
  let fixture: ComponentFixture<MRadiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRadiobuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
