import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, StoreFeatureModule, StoreModule } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { I18nModule } from 'src/app/i18n.module';
import { sidebarFeatureKey, sidebarReducer } from 'src/app/store/sidebar/sidebar.reducer';
import { themesFeatureKey, themesReducer } from 'src/app/store/themes/themes.reducer';

import { SiderComponent } from './sider.component';

describe('SiderComponent', () => {
  let component: SiderComponent;
  let fixture: ComponentFixture<SiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        I18nModule,
        StoreModule.forFeature(sidebarFeatureKey || themesFeatureKey, sidebarReducer || themesReducer)
      ],
      providers: [
        TranslateService,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher
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
