import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSplitterComponent } from './m-splitter.component';

describe('MSplitterComponent', () => {
  let component: MSplitterComponent;
  let fixture: ComponentFixture<MSplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSplitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
