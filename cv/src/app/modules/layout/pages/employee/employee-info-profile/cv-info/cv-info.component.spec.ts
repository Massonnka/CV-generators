import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CvInfoComponent } from './cv-info.component';

describe('CvInfoComponent', () => {
  let component: CvInfoComponent;
  let fixture: ComponentFixture<CvInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        RouterTestingModule,
        BrowserDynamicTestingModule
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
