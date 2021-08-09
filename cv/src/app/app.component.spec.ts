import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DEFAULT_LANGUAGE, MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, USE_STORE } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { I18nModule } from './i18n.module';
import { projectsReducer } from './store/projects/projects.reducers';
import { sidebarReducer } from './store/sidebar/sidebar.reducer';
import { themesReducer } from './store/themes/themes.reducer';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        I18nModule,
        StoreModule.forRoot({
          toggle: sidebarReducer,
          theme: themesReducer,
          projects: projectsReducer,
        }),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        })
      ],
      providers: [
        TranslateService,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('cv app is running!');
  });
});
