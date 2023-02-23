import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssConditionComponent } from './scss-condition.component';

describe('ScssConditionComponent', () => {
  let component: ScssConditionComponent;
  let fixture: ComponentFixture<ScssConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
