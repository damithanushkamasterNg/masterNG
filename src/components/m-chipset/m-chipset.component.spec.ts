import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MChipsetComponent } from './m-chipset.component';

describe('MChipsetComponent', () => {
  let component: MChipsetComponent;
  let fixture: ComponentFixture<MChipsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MChipsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MChipsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
