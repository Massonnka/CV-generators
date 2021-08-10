import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CvInfoComponent } from './cv-info.component';

describe('CvInfoComponent', () => {
  let component: CvInfoComponent;
  let fixture: ComponentFixture<CvInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        Router
      ],
      declarations: [CvInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
