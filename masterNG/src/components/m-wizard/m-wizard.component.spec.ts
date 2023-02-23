import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWizardComponent } from './m-wizard.component';

describe('MWizardComponent', () => {
  let component: MWizardComponent;
  let fixture: ComponentFixture<MWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
