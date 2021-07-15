import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthGroupComponent } from './form-auth-group.component';

describe('FormAuthGroupComponent', () => {
  let component: FormAuthGroupComponent;
  let fixture: ComponentFixture<FormAuthGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAuthGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
