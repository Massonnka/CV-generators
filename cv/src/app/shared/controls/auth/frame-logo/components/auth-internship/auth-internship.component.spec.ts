import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthInternshipComponent } from './auth-internship.component';

describe('AuthInternshipComponent', () => {
  let component: AuthInternshipComponent;
  let fixture: ComponentFixture<AuthInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthInternshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
