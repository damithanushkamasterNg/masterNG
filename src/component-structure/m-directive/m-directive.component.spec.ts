import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDirectiveComponent } from './m-directive.component';

describe('MDirectiveComponent', () => {
  let component: MDirectiveComponent;
  let fixture: ComponentFixture<MDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
