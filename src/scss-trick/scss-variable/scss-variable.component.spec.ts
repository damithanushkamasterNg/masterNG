import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssVariableComponent } from './scss-variable.component';

describe('ScssVariableComponent', () => {
  let component: ScssVariableComponent;
  let fixture: ComponentFixture<ScssVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
