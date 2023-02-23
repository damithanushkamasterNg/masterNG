import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssMapComponent } from './scss-map.component';

describe('ScssMapComponent', () => {
  let component: ScssMapComponent;
  let fixture: ComponentFixture<ScssMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
