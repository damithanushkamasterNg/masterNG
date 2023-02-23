import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTextareaComponent } from './m-textarea.component';

describe('MTextareaComponent', () => {
  let component: MTextareaComponent;
  let fixture: ComponentFixture<MTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
