import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationrequestComponent } from './medicationrequest.component';

describe('MedicationrequestComponent', () => {
  let component: MedicationrequestComponent;
  let fixture: ComponentFixture<MedicationrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationrequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});