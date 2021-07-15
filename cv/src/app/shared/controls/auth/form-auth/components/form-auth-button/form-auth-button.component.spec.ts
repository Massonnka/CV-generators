import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthButtonComponent } from './form-auth-button.component';

describe('FormAuthButtonComponent', () => {
  let component: FormAuthButtonComponent;
  let fixture: ComponentFixture<FormAuthButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAuthButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
