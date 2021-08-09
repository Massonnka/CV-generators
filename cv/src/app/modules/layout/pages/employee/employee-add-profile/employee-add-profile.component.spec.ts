import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { EmployeeAddProfileComponent } from './employee-add-profile.component';

describe('EmployeeAddProfileComponent', () => {
  let component: EmployeeAddProfileComponent;
  let fixture: ComponentFixture<EmployeeAddProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Store
      ],
      declarations: [EmployeeAddProfileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
