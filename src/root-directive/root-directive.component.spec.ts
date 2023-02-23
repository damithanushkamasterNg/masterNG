import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootDirectiveComponent } from './root-directive.component';

describe('RootDirectiveComponent', () => {
  let component: RootDirectiveComponent;
  let fixture: ComponentFixture<RootDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
