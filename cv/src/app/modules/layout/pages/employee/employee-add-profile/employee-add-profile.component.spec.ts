import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, Store, StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { breadcrumbReducer, breadcrumbsFeatureKey } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.reducer';

import { EmployeeAddProfileComponent } from './employee-add-profile.component';

describe('EmployeeAddProfileComponent', () => {
  let component: EmployeeAddProfileComponent;
  let fixture: ComponentFixture<EmployeeAddProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        TranslateModule,
        StoreModule.forFeature(breadcrumbsFeatureKey, breadcrumbReducer)
      ],
      providers: [
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher
      ],
      declarations: [EmployeeAddProfileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
