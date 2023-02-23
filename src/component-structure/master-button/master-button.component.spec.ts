import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterButtonComponent } from './master-button.component';

describe('MasterButtonComponent', () => {
  let component: MasterButtonComponent;
  let fixture: ComponentFixture<MasterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
