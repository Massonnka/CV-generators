import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, StoreModule } from '@ngrx/store';
import { I18nModule } from 'src/app/i18n.module';
import { provideMockStore } from '@ngrx/store/testing';
import { GlobalHeaderComponent } from './global-header.component';
import { TranslateService } from '@ngx-translate/core';

describe('GlobalHeaderComponent', () => {
  let component: GlobalHeaderComponent;
  let fixture: ComponentFixture<GlobalHeaderComponent>;

  beforeEach(async () => {
    const initialState = { loggedIn: false };
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        I18nModule,
        HttpClientModule,
      ],
      providers: [
        TranslateService,
        provideMockStore({ initialState }),
      ],
      declarations: [GlobalHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
