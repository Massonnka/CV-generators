import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionsSubject, StateObservable, Store } from '@ngrx/store';
import { DEFAULT_LANGUAGE, MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateParser, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, USE_STORE } from '@ngx-translate/core';

import { SiderComponent } from './sider.component';

describe('SiderComponent', () => {
  let component: SiderComponent;
  let fixture: ComponentFixture<SiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        Store,
        StateObservable,
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
        ActionsSubject
      ],
      declarations: [SiderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
