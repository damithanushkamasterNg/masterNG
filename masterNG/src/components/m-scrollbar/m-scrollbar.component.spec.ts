import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MScrollbarComponent } from './m-scrollbar.component';

describe('MScrollbarComponent', () => {
  let component: MScrollbarComponent;
  let fixture: ComponentFixture<MScrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MScrollbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
