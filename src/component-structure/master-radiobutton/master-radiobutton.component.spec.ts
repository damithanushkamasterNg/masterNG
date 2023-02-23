import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRadiobuttonComponent } from './master-radiobutton.component';

describe('MasterRadiobuttonComponent', () => {
  let component: MasterRadiobuttonComponent;
  let fixture: ComponentFixture<MasterRadiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterRadiobuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
