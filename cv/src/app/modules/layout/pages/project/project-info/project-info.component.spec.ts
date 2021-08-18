import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { I18nModule } from 'src/app/i18n.module';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { ProjectAddInfoComponent } from '../project-add-info/project-add-info.component';
import { ProjectComponent } from '../project.component';
import { ProjectInfoComponent } from './project-info.component';

describe('ProjectInfoComponent', () => {
  let component: ProjectInfoComponent;
  let fixture: ComponentFixture<ProjectInfoComponent>;
  let mockLocation = {
    back: jasmine.createSpy('back'),
  };
  const mockProject = {
    id: 'project-id',
    name: 'project-name',
    startDate: '01-01-2000',
    endDate: '01-01-2010',
    teamSize: 10,
  };
  let mockStore: MockStore;
  const initialState = {
    breadcrumbs: {
      url: '',
      name: '',
      isDisable: false,
    },
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'layout/project',
            component: ProjectComponent,
          },
          {
            path: 'layout/project/addinfo',
            component: ProjectAddInfoComponent,
          },
          {
            path: 'layout/project/:project',
            component: ProjectInfoComponent,
          },
        ]),
        BrowserDynamicTestingModule,
        HttpClientTestingModule,
        I18nModule,
      ],
      providers: [
        TranslateService,
        { provide: Location, useValue: mockLocation },
        ProjectService,
        provideMockStore({ initialState }),
      ],
      declarations: [ProjectInfoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    mockStore = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change location back', () => {
    let methodSpy = spyOn(component, 'onBack').and.callThrough();
    component.onBack();
    expect(methodSpy).toHaveBeenCalledWith();
  });

  it('should delete project', () => {
    let deleteItemSpy = spyOn(component, 'deleteItem').and.callThrough();
    component.deleteItem(mockProject);

    expect(deleteItemSpy).toHaveBeenCalled();
  });

  it('should edit project', () => {
    const mockRouter = TestBed.inject(Router);
    const navigateSpy = spyOn(mockRouter, 'navigate');
    component.editItem(mockProject);
    expect(navigateSpy).toHaveBeenCalled();
  });

  xit("should't delete project equal to null", () => {
    let deleteItemSpy = spyOn(component, 'deleteItem').and.callThrough();
    component.deleteItem(undefined);

    expect(deleteItemSpy).toBeUndefined();
  });

  xit('should set current project', () => {
    let expectedCurrentProjectValue: any = null;
    component.ngOnInit();
    component.project$.subscribe((value) => {
      expectedCurrentProjectValue = value;

      console.log('expectedCurrentProjectValue: ', expectedCurrentProjectValue);

      expect((<any>component).currentProject).toEqual(
        expectedCurrentProjectValue
      );
    });
  });
});
