import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLoaderComponent } from './master-loader.component';

describe('MasterLoaderComponent', () => {
  let component: MasterLoaderComponent;
  let fixture: ComponentFixture<MasterLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
