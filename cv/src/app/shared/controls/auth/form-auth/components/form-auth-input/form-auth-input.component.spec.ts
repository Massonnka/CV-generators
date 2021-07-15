import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthInputComponent } from './form-auth-input.component';

describe('FormAuthInputComponent', () => {
  let component: FormAuthInputComponent;
  let fixture: ComponentFixture<FormAuthInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAuthInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
