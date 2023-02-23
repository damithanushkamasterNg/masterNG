import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssTrickComponent } from './scss-trick.component';

describe('ScssTrickComponent', () => {
  let component: ScssTrickComponent;
  let fixture: ComponentFixture<ScssTrickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssTrickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssTrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
