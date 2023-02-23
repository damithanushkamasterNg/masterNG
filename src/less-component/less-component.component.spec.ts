import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessComponentComponent } from './less-component.component';

describe('LessComponentComponent', () => {
  let component: LessComponentComponent;
  let fixture: ComponentFixture<LessComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
