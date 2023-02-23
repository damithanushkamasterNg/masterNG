import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLoaderComponent } from './m-loader.component';

describe('MLoaderComponent', () => {
  let component: MLoaderComponent;
  let fixture: ComponentFixture<MLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
