import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListnerComponent } from './host-listner.component';

describe('HostListnerComponent', () => {
  let component: HostListnerComponent;
  let fixture: ComponentFixture<HostListnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostListnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostListnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
