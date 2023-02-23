import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssFunctionComponent } from './scss-function.component';

describe('ScssFunctionComponent', () => {
  let component: ScssFunctionComponent;
  let fixture: ComponentFixture<ScssFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssFunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
