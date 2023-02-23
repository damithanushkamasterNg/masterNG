import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSidePanelComponent } from './m-side-panel.component';

describe('MSidePanelComponent', () => {
  let component: MSidePanelComponent;
  let fixture: ComponentFixture<MSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSidePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
