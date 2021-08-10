import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormInfoComponent } from './form-info.component';

describe('FormInfoComponent', () => {
  let component: FormInfoComponent;
  let fixture: ComponentFixture<FormInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        FormBuilder
      ],
      declarations: [FormInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
