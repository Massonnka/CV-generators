import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, StoreModule } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { I18nModule } from 'src/app/i18n.module';
import { breadcrumbReducer, breadcrumbsFeatureKey } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.reducer';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        HttpClientModule,
        I18nModule,
        StoreModule.forFeature(breadcrumbsFeatureKey, breadcrumbReducer),
        StoreRouterConnectingModule.forRoot()
      ],
      providers: [
        TranslateService,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher
      ],
      declarations: [EmployeeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
