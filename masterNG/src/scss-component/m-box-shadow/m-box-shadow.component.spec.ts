import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBoxShadowComponent } from './m-box-shadow.component';

describe('MBoxShadowComponent', () => {
  let component: MBoxShadowComponent;
  let fixture: ComponentFixture<MBoxShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBoxShadowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MBoxShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
