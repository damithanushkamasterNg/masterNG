import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAnimationComponent } from './m-animation.component';

describe('MAnimationComponent', () => {
  let component: MAnimationComponent;
  let fixture: ComponentFixture<MAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
