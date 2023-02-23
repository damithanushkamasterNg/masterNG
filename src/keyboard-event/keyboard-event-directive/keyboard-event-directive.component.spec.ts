import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardEventDirectiveComponent } from './keyboard-event-directive.component';

describe('KeyboardEventDirectiveComponent', () => {
  let component: KeyboardEventDirectiveComponent;
  let fixture: ComponentFixture<KeyboardEventDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardEventDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardEventDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
