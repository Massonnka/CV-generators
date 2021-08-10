import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nModule } from 'src/app/i18n.module';

import { FormCvComponent } from './form-cv.component';

describe('FormCvComponent', () => {
  let component: FormCvComponent;
  let fixture: ComponentFixture<FormCvComponent>;

  beforeEach(async () => {
    window.history.pushState({ options: 'somevalue' }, '', '');
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        I18nModule,
        HttpClientModule,
      ],
      providers: [
        FormBuilder,
        TranslateService
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
