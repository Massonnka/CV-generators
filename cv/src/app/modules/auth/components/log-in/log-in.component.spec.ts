import { HttpHandler } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DEFAULT_LANGUAGE, MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, USE_STORE } from '@ngx-translate/core';

import { LogInComponent } from './log-in.component';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule
      ],
      providers: [
        Router,
        FormBuilder,
        HttpClient,
        HttpHandler,
        { provide: USE_DEFAULT_LANG, useValue: undefined },
        { provide: USE_STORE, useValue: undefined },
        { provide: USE_EXTEND, useValue: undefined },
        { provide: DEFAULT_LANGUAGE, useValue: undefined },
        TranslateService,
        TranslateStore,
        TranslateLoader,
        TranslateCompiler,
        TranslateParser,
        MissingTranslationHandler,
      ],
      declarations: [LogInComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
