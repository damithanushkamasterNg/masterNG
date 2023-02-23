import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssComponentComponent } from './scss-component.component';

describe('ScssComponentComponent', () => {
  let component: ScssComponentComponent;
  let fixture: ComponentFixture<ScssComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
