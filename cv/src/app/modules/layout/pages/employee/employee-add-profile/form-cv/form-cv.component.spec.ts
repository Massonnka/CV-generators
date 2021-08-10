import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { FormCvComponent } from './form-cv.component';

describe('FormCvComponent', () => {
  let component: FormCvComponent;
  let fixture: ComponentFixture<FormCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Router
      ],
      declarations: [FormCvComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
