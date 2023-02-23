import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventListnerComponent } from './add-event-listner.component';

describe('AddEventListnerComponent', () => {
  let component: AddEventListnerComponent;
  let fixture: ComponentFixture<AddEventListnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventListnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventListnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
