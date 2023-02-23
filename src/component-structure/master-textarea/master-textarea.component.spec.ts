import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTextareaComponent } from './master-textarea.component';

describe('MasterTextareaComponent', () => {
  let component: MasterTextareaComponent;
  let fixture: ComponentFixture<MasterTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
