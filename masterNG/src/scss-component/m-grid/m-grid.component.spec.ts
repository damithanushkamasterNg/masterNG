import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MGridComponent } from './m-grid.component';

describe('MGridComponent', () => {
  let component: MGridComponent;
  let fixture: ComponentFixture<MGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
