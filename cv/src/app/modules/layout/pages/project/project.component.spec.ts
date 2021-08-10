import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, StoreModule } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { I18nModule } from 'src/app/i18n.module';
import { breadcrumbReducer, breadcrumbsFeatureKey } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.reducer';
import { projectsFeatureKey, projectsReducer } from 'src/app/store/projects/projects.reducers';
import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        I18nModule,
        StoreModule.forFeature(
          breadcrumbsFeatureKey || projectsFeatureKey,
          breadcrumbReducer || projectsReducer
        ),
      ],
      providers: [
        TranslateService,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher
      ],
      declarations: [ProjectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
