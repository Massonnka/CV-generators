import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCvComponent } from './profile-cv.component';

describe('ProfileCvComponent', () => {
  let component: ProfileCvComponent;
  let fixture: ComponentFixture<ProfileCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
