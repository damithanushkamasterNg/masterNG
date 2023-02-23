import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCheckboxGroupComponent } from './m-checkbox-group.component';

describe('MCheckboxGroupComponent', () => {
  let component: MCheckboxGroupComponent;
  let fixture: ComponentFixture<MCheckboxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCheckboxGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
