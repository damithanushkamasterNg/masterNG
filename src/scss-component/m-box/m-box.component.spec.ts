import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBoxComponent } from './m-box.component';

describe('MBoxComponent', () => {
  let component: MBoxComponent;
  let fixture: ComponentFixture<MBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
