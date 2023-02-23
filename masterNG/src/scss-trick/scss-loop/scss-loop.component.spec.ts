import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssLoopComponent } from './scss-loop.component';

describe('ScssLoopComponent', () => {
  let component: ScssLoopComponent;
  let fixture: ComponentFixture<ScssLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssLoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
