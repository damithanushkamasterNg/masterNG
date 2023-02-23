import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTextShadowComponent } from './m-text-shadow.component';

describe('MTextShadowComponent', () => {
  let component: MTextShadowComponent;
  let fixture: ComponentFixture<MTextShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTextShadowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTextShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
